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
