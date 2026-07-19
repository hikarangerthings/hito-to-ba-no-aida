# 人と場のあいだ

「人が集まる人に、会いにいく。」をコンセプトにした、個人運営のインタビューWebメディアです。Astroで静的なHTMLを作るため、広告や会員登録なしで軽快に読めます。

## 使用技術

- Astro（サイトを組み立てる道具）
- TypeScript（コードの間違いを見つけやすくする仕組み）
- Markdown + Content Collections（記事の管理と入力チェック）
- CSS（見た目とレスポンシブ対応）

## 必要なソフト

- Node.js 20以上（推奨：LTS版）
- VS Code
- Git（GitHubへ公開するときに使用）

## 初回セットアップ

1. VS Codeでこのフォルダを開きます。
2. メニューの「ターミナル」→「新しいターミナル」を選びます。
3. `npm install` を実行します。
4. `npm run dev` を実行します。
5. 表示された `http://localhost:4321` をブラウザで開きます。

## よく使うコマンド

| コマンド | 用途 |
| --- | --- |
| `npm install` | 必要な部品を最初に一度だけ入れる |
| `npm run dev` | 編集しながらローカルで確認する |
| `npm run build` | 公開用ファイルを作り、エラーを確認する |
| `npm run preview` | 公開用ファイルをローカルで最終確認する |

## 主なフォルダ

- `src/content/interviews/`：記事Markdown。普段もっともよく触ります。
- `public/images/interviews/`：記事写真。記事ごとの番号フォルダを作ります。
- `src/pages/`：各ページ。通常は触らなくて構いません。
- `src/components/`：共通パーツ。通常は触らなくて構いません。
- `src/styles/`：色やレイアウト。デザイン変更時のみ触ります。
- `dist/`：ビルド時に自動生成される公開用ファイル。直接編集しません。

詳しいインタビュー追加方法は [ARTICLE_GUIDE.md](./ARTICLE_GUIDE.md)、書評の追加方法は [BOOK_REVIEW_GUIDE.md](./BOOK_REVIEW_GUIDE.md)、Business記事の追加方法は [BUSINESS_GUIDE.md](./BUSINESS_GUIDE.md)、Movie・Playlistの追加方法は [MOVIE_PLAYLIST_GUIDE.md](./MOVIE_PLAYLIST_GUIDE.md)、フォントや配置の変更方法は [DESIGN_GUIDE.md](./DESIGN_GUIDE.md)、公開方法は [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) を参照してください。

## サイトURLの変更

標準URLは `astro.config.mjs` にあります。Cloudflare Pagesの環境変数 `SITE_URL` に本番URLを登録すれば、canonical URLやサイトマップにそのURLが使われます。`robots.txt` のSitemap URLも独自ドメインへ変更してください。

## トラブル時の確認

- `node --version` が20以上か確認します。
- エラーに記事名が出たら、そのMarkdownの `---` 内を確認します。
- 写真が出ない場合は、ファイル名・拡張子・大文字小文字が完全に同じか確認します。
- 変更が出ない場合は開発サーバーを `Ctrl + C` で止め、`npm run dev` をやり直します。
- 公開前は必ず `npm run build` が成功することを確認します。

## 特集記事の決まり

`featured: true` の公開記事が複数ある場合、その中で公開日がもっとも新しい記事をトップに大きく表示します。該当がない場合は、全記事のうち最新の記事を表示します。`draft: true` の記事は一覧、RSS、サイトマップに含まれません。
