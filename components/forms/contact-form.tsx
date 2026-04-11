"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false };

const categories = [
  "家庭用エアコンクリーニング",
  "業務用エアコンクリーニング",
  "追い焚き配管洗浄",
  "浴室・水回り",
  "車内クリーニング",
  "防カビコーティング",
  "法人・定期清掃",
  "その他 / 相談",
] as const;

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const formId = useId();

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-5 rounded-2xl border border-white/15 bg-white/[0.03] p-8 text-white md:p-10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sakura-300/40 bg-sakura-500/10 text-sakura-300">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className="font-accent text-sm text-sakura-300">thank you</p>
          <p className="mt-2 text-2xl font-medium md:text-3xl">
            お問い合わせを
            <br className="md:hidden" />
            受け付けました
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          idPrefix={formId}
          name="name"
          label="お名前"
          required
          defaultValue={state.values?.name}
          error={state.errors?.name}
        />
        <Field
          idPrefix={formId}
          name="email"
          type="email"
          label="メールアドレス"
          required
          defaultValue={state.values?.email}
          error={state.errors?.email}
        />
        <Field
          idPrefix={formId}
          name="phone"
          type="tel"
          label="電話番号"
          optional
          defaultValue={state.values?.phone}
          error={state.errors?.phone}
        />
        <SelectField
          idPrefix={formId}
          name="category"
          label="ご希望メニュー"
          required
          defaultValue={state.values?.category}
          error={state.errors?.category}
          options={categories}
        />
      </div>

      <TextareaField
        idPrefix={formId}
        name="message"
        label="お問い合わせ内容"
        required
        defaultValue={state.values?.message}
        error={state.errors?.message}
      />

      {state.message && !state.ok && (
        <p role="alert" aria-live="assertive" className="text-sm text-sakura-300">
          {state.message}
        </p>
      )}

      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-xs text-white/50">
          送信いただいた情報は、お問い合わせ対応以外には使用しません
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition hover:bg-sakura-100 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "送信中…" : "送信する"}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
    </button>
  );
}

type FieldProps = {
  idPrefix: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  defaultValue?: string;
  error?: string;
};

function Field({
  idPrefix,
  name,
  label,
  type = "text",
  required,
  optional,
  defaultValue,
  error,
}: FieldProps) {
  const fieldId = `${idPrefix}-${name}`;
  const errorId = `${fieldId}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="flex items-center gap-2 text-xs text-white/60"
      >
        {label}
        {required && (
          <span className="text-sakura-300" aria-hidden>
            *
          </span>
        )}
        {optional && (
          <span className="font-accent text-[11px] text-white/40">optional</span>
        )}
      </label>
      <input
        id={fieldId}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-sakura-300/60 focus:outline-none focus:ring-2 focus:ring-sakura-300/20"
      />
      {error && (
        <span id={errorId} role="alert" className="text-xs text-sakura-300">
          {error}
        </span>
      )}
    </div>
  );
}

function TextareaField({
  idPrefix,
  name,
  label,
  required,
  defaultValue,
  error,
}: FieldProps) {
  const fieldId = `${idPrefix}-${name}`;
  const errorId = `${fieldId}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="flex items-center gap-2 text-xs text-white/60"
      >
        {label}
        {required && (
          <span className="text-sakura-300" aria-hidden>
            *
          </span>
        )}
      </label>
      <textarea
        id={fieldId}
        name={name}
        required={required}
        defaultValue={defaultValue}
        rows={5}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="resize-none rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-sakura-300/60 focus:outline-none focus:ring-2 focus:ring-sakura-300/20"
      />
      {error && (
        <span id={errorId} role="alert" className="text-xs text-sakura-300">
          {error}
        </span>
      )}
    </div>
  );
}

function SelectField({
  idPrefix,
  name,
  label,
  required,
  defaultValue,
  error,
  options,
}: FieldProps & { options: readonly string[] }) {
  const fieldId = `${idPrefix}-${name}`;
  const errorId = `${fieldId}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="flex items-center gap-2 text-xs text-white/60"
      >
        {label}
        {required && (
          <span className="text-sakura-300" aria-hidden>
            *
          </span>
        )}
      </label>
      <select
        id={fieldId}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white focus:border-sakura-300/60 focus:outline-none focus:ring-2 focus:ring-sakura-300/20"
      >
        <option value="" disabled className="bg-ink">
          選択してください
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink">
            {o}
          </option>
        ))}
      </select>
      {error && (
        <span id={errorId} role="alert" className="text-xs text-sakura-300">
          {error}
        </span>
      )}
    </div>
  );
}
