# Movie・Playlist 記事追加ガイド

MovieとPlaylistは、Markdownファイルを追加して公開できます。

## Movie記事

1. `src/content/movies/_template.md` を同じフォルダーへコピーします。
2. ファイル名を `002.md` など、既存と重複しない名前に変更します。
3. `title`、`description`、`movieTitle`などを書き換えます。
4. `slug`を半角英数字とハイフンだけの固有名に変更します（例: `interstellar`）。
5. 公開するときは必ず `draft: false` にします。

## Playlist記事

1. `src/content/playlists/_template.md` を同じフォルダーへコピーします。
2. ファイル名を `002.md` など、既存と重複しない名前に変更します。
3. `title`、`description`、`theme`、`serviceUrl`などを書き換えます。
4. `slug`を半角英数字とハイフンだけの固有名に変更します（例: `late-night-jazz`）。
5. 公開するときは必ず `draft: false` にします。

## 確認と公開

ローカル確認では、プロジェクトフォルダーで次を実行します。

```powershell
npm.cmd run dev
```

Movieは `/movies/`、Playlistは `/playlists/` で確認できます。

Cloudflareの公開サイトへ反映するには、ローカル保存だけではなくGitHubへのコミットとpushが必要です。Codexへ「追加した記事をビルドしてGitHub、Cloudflareへ反映して」と依頼すれば実行できます。

## 表示されないとき

- `draft: true` になっていないか
- `slug`が別の記事と重複していないか
- Markdownの先頭と基本情報の末尾に `---` があるか
- GitHubへpushされているか
- Cloudflareのデプロイが完了しているか
