# 書評の追加ガイド

書評は `src/content/reviews/` フォルダーのMarkdownファイルで管理します。

## 新しい書評を作る

1. `src/content/reviews/_template.md` をコピーします。
2. コピーしたファイルを `001.md`、`002.md` のような名前に変更します。
3. ファイル上部の `---` で囲まれた基本情報を書き換えます。
4. 2つ目の `---` より下へ書評本文を書きます。
5. `draft: false` にします。
6. `npm.cmd run dev` で確認します。
7. 公開前に `npm.cmd run build` を実行します。

## 基本情報

```yaml
---
title: "書評のタイトル"
slug: "book-title"
description: "書評の短い紹介文"
publishedAt: "2026-07-15"
updatedAt: "2026-07-15"
author: "Hikaru Taniguchi"
bookTitle: "本のタイトル"
bookAuthor: "著者名"
publisher: "出版社名"
cover: "/images/reviews/001/cover.jpg"
coverAlt: "書籍『本のタイトル』の表紙"
rating: 4
draft: false
tags:
  - エッセイ
  - 仕事
---
```

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `title` | 必須 | 書評記事のタイトル |
| `slug` | 必須 | URLに使う半角英数字。ほかの記事と重複させない |
| `description` | 必須 | 一覧や検索結果に表示する短い説明 |
| `publishedAt` | 必須 | 公開日 |
| `updatedAt` | 任意 | 更新日。不要なら行ごと削除可能 |
| `author` | 必須 | 書評を書いた人 |
| `bookTitle` | 必須 | 紹介する本のタイトル |
| `bookAuthor` | 必須 | 本の著者 |
| `publisher` | 任意 | 出版社 |
| `cover` | 任意 | 表紙画像の場所 |
| `coverAlt` | 任意 | 表紙画像の説明 |
| `rating` | 任意 | 0〜5の評価。不要なら記載しない |
| `draft` | 必須 | `true` は下書き、`false` は公開 |
| `tags` | 必須 | 本のジャンルやテーマ |

## 表紙画像を追加する

1. `public/images/reviews/001/` のように書評用フォルダーを作ります。
2. 表紙画像を `cover.jpg` という名前で入れます。
3. Markdownへ次を追加します。

```yaml
cover: "/images/reviews/001/cover.jpg"
coverAlt: "書籍『本のタイトル』の表紙"
```

画像がない場合は `cover` の行を削除してください。壊れた画像やプレースホルダーは表示されません。

## 本文の書き方

```markdown
この本を手に取った理由を書きます。

## 印象に残ったこと

本を読んで考えたことを、自分の言葉で書きます。

> 短い引用を入れる場合は行頭に「>」を付けます。

## 読み終えて

読後に残ったことや、どんな人に勧めたいかを書きます。
```

著作権に配慮し、本の文章を長く転載しないでください。引用は必要な短い範囲に留め、書名・著者名など出典が分かるようにします。

## 表示されないとき

- `draft: false` になっているか確認します。
- `slug` がほかの書評と重複していないか確認します。
- 日付が `"2026-07-15"` の形式か確認します。
- ファイルを保存し、ブラウザを更新します。
