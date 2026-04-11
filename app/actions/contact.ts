"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/lib/site";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(80),
  email: z.string().trim().email("メールアドレスの形式が正しくありません"),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  category: z.enum(
    [
      "家庭用エアコンクリーニング",
      "業務用エアコンクリーニング",
      "追い焚き配管洗浄",
      "浴室・水回り",
      "車内クリーニング",
      "防カビコーティング",
      "法人・定期清掃",
      "その他 / 相談",
    ],
    { message: "ご希望のメニューを選択してください" },
  ),
  message: z
    .string()
    .trim()
    .min(10, "メッセージは 10 文字以上で入力してください")
    .max(2000),
});

export type ContactState = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
  values?: Record<string, string>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    category: String(formData.get("category") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      ok: false,
      message: "入力内容をご確認ください",
      errors,
      values: raw,
    };
  }

  const data = parsed.data;

  // NOTE: RESEND_API_KEY が設定されていない開発環境ではログ出力のみ
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? site.email;
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY 未設定のためメール送信はスキップ", data);
    return {
      ok: true,
      message:
        "（開発モード）お問い合わせを受け付けました。本番では自動でメールが送信されます。",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: data.email,
      subject: `【${site.legalName}】お問い合わせ: ${data.category}`,
      text: [
        `お名前: ${data.name}`,
        `メール: ${data.email}`,
        `電話: ${data.phone || "（未入力）"}`,
        `ご希望メニュー: ${data.category}`,
        "",
        "━━ メッセージ ━━",
        data.message,
      ].join("\n"),
    });
    return {
      ok: true,
      message: "お問い合わせを受け付けました。1 営業日以内にご返信いたします。",
    };
  } catch (error) {
    console.error("[contact] resend error", error);
    return {
      ok: false,
      message: "送信中にエラーが発生しました。お手数ですが再度お試しください。",
      values: raw,
    };
  }
}
