# GitHub・Cloudflare Pages 公開ガイド

GitHubはファイルを保管・履歴管理するサービス、Cloudflare PagesはそのファイルからWebサイトを無料公開するサービスです。

## 1. GitHubリポジトリを作る

1. GitHubで無料アカウントを作ります。
2. 右上の「＋」→「New repository」を選びます。
3. Repository nameへ `hito-to-ba-no-aida` と入力します。
4. Public（一般公開）またはPrivate（非公開）を選び、「Create repository」を押します。
5. GitHub Desktopを使う場合は「Add an Existing Repository」でこのフォルダを追加し、Publish repositoryを実行します。

公開前にローカルで `npm install` と `npm run build` が成功することを確認してください。`node_modules` と `dist` は自動生成物なのでGitHubへ置きません。

## 2. Cloudflare Pagesと接続する

1. Cloudflareへログインし、「Workers & Pages」を開きます。
2. 「Create」→「Pages」→「Connect to Git」を選びます。
3. GitHubを接続し、先ほどのリポジトリを選びます。
4. Framework presetは `Astro` を選びます。
5. 次の設定を確認して「Save and Deploy」を押します。

| 設定 | 値 |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `20` |

必要な場合はCloudflareの「Environment variables」へ `NODE_VERSION` = `20` を追加します。公開URLが決まったら、同じ画面へ `SITE_URL` = `https://実際のURL` を追加して再公開します。

## 3. 初回公開とURL確認

ビルドが完了すると `https://任意の名前.pages.dev` という無料URLが表示されます。トップ、記事一覧、記事詳細を開いて確認します。

## 記事更新後の公開

記事や写真を変更し、GitHubへ反映（push）するとCloudflare Pagesが自動で再ビルドします。通常は数分で新しい内容へ切り替わります。

## 独自ドメインを使う場合

Cloudflare Pagesの対象プロジェクトで「Custom domains」→「Set up a custom domain」を選び、所有するドメインを入力します。案内に沿ってDNS（ドメインの行き先を決める設定）を変更します。その後 `SITE_URL` と `public/robots.txt` のSitemap URLを独自ドメインへ変更します。

## 公開に失敗したとき

- Cloudflareのビルド履歴を開き、赤字の最初のエラーを確認します。
- Build commandが `npm run build`、出力先が `dist` か確認します。
- Node.jsが20以上か確認します。
- MarkdownのFrontmatterで、引用符や `---` が抜けていないか確認します。
- 写真名の大文字・小文字がコードと一致しているか確認します（公開環境では区別されます）。
- ローカルでも `npm run build` を行い、同じエラーが出るか確認します。
