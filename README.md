# 桜 Scrub サービス コーポレートサイト

ハウスクリーニング・エアコン分解洗浄専門「桜 Scrub サービス」の公式ウェブサイトです。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router, Turbopack)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **フォント**: Noto Sans JP / Shippori Mincho (via `next/font/google`)
- **Node バージョン管理**: mise (`mise.toml` で Node 22 を固定)
  - Node 22 は Next.js 16 の推奨 LTS。手元と Vercel で同じ挙動にするため
    `package.json` の `engines.node` も `22.x` に合わせています

### 将来の拡張予定

| 機能 | 想定実装 |
| --- | --- |
| ブログ / お知らせ / 会社情報 CMS | **microCMS** |
| 予約システム・お問い合わせ永続化・管理者認証 | **Supabase (Postgres + Auth)** |
| ORM | **Drizzle ORM** |
| デプロイ | **Vercel** |

## セットアップ

```bash
# Node バージョンを mise に合わせる
mise install

# 依存パッケージをインストール
npm install
```

## 開発

```bash
npm run dev
```

`http://localhost:3377` を開いてください。

## ビルド / 型・Lint チェック

```bash
npm run build   # 本番ビルド + 型チェック
npm run lint    # ESLint
```

## ディレクトリ構成

```
app/                # App Router ページ・レイアウト・sitemap/robots
  layout.tsx        # ルートレイアウト (フォント / SEO / Header / Footer)
  page.tsx          # トップページ（各セクションを組み立てるだけ）
  sitemap.ts        # sitemap.xml
  robots.ts         # robots.txt
  globals.css       # Tailwind v4 テーマ定義（ブランドカラー / フォント）

components/
  layout/           # Header / Footer
  sections/         # トップページ各セクション
    hero.tsx
    services.tsx
    strengths.tsx
    works.tsx
    about.tsx
    flow.tsx
    faq.tsx
    contact.tsx
  seo/              # 構造化データ (JSON-LD)

lib/
  site.ts           # 会社情報・ナビ定義（将来 microCMS 化予定）
  utils.ts          # cn() などユーティリティ

public/
  images/
    brand/logo.png  # ロゴ
    works/*.jpg     # 施工事例写真
```

## ブランドカラー

| 用途 | 値 |
| --- | --- |
| Sakura (アクセント) | `#ec1683` (`--color-sakura-500`) |
| Aqua (サブ) | `#0aa3d1` (`--color-aqua-500`) |
| 背景 | `#fdfbfa` (`--color-background`) |
| テキスト | `#1a1624` (`--color-foreground`) |

Tailwind v4 の `@theme` ブロックで定義しているため、`bg-sakura-500`, `text-aqua-600` のようにそのままクラスとして使えます。

## 仮置きデータについて

`lib/site.ts` 内の電話番号・メール・住所などは仮値です。
最終的には **microCMS** から取得するよう差し替え予定です。

## 環境変数

`.env.local` に設定（未設定でもビルド・動作可能）。

```sh
# お問い合わせフォームのメール送信 (Resend)
# NOTE: 未設定時は server action が console.info でフォールバック
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx

# 送信先メールアドレス (デフォルト: lib/site.ts の email)
CONTACT_TO_EMAIL=info@example.com

# 送信元メールアドレス
# NOTE: 独自ドメインを Resend に登録していない場合は onboarding@resend.dev
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

### Vercel 実行時の URL 解決

`lib/site.ts` の `getSiteUrl()` が以下の優先順位で正準 URL を返し、
`metadataBase` / `sitemap.xml` / `robots.txt` / LocalBusiness JSON-LD で利用されます:

1. `VERCEL_PROJECT_PRODUCTION_URL`（Vercel Production 時に自動注入）
2. `VERCEL_URL`（Preview デプロイの都度の URL）
3. `site.url` （ローカルや未定義時のフォールバック）

独自ドメインを運用する場合は、Vercel の Environment Variables で
`VERCEL_PROJECT_PRODUCTION_URL` と同等のカスタム値を設定するか、
`site.url` を正式ドメインに書き換えてください。
