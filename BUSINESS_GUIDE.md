# Business記事の追加ガイド

Business記事は `src/content/business/` フォルダーのMarkdownで管理します。

## 新しい記事を作る

1. `src/content/business/_template.md` をコピーします。
2. コピーしたファイルを `001.md`、`002.md` のような名前へ変更します。
3. ファイル上部の基本情報を書き換えます。
4. 2つ目の `---` より下へ本文を書きます。
5. `draft: false` にします。
6. `npm.cmd run dev` で確認します。
7. 公開前に `npm.cmd run build` を実行します。

## 基本情報

```yaml
---
title: "Business記事のタイトル"
slug: "business-article"
description: "記事の短い紹介文"
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
author: "Hikaru Taniguchi"
businessName: "会社名・サービス名"
businessType: "事業分野"
mainImage: "/images/business/001/main.jpg"
mainImageAlt: "記事画像の説明"
draft: false
tags:
  - 仕事
  - ビジネス
---
```

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `title` | 必須 | 記事タイトル |
| `slug` | 必須 | URLに使用する半角英数字。ほかの記事と重複させない |
| `description` | 必須 | 一覧や検索結果へ表示する短い説明 |
| `publishedAt` | 必須 | 公開日 |
| `updatedAt` | 任意 | 更新日 |
| `author` | 必須 | 執筆者 |
| `businessName` | 任意 | 取り上げる会社、店、サービス、事業名 |
| `businessType` | 任意 | 飲食、小売、ITなどの事業分野 |
| `mainImage` | 任意 | 記事画像の場所 |
| `mainImageAlt` | 任意 | 画像内容の説明 |
| `draft` | 必須 | `true` は下書き、`false` は公開 |
| `tags` | 必須 | 記事のテーマ |

## 画像を追加する

画像を使う場合は `public/images/business/001/` のようなフォルダーを作り、画像を入れます。

```yaml
mainImage: "/images/business/001/main.jpg"
mainImageAlt: "店内で商品を確認する運営者"
```

画像を使わない場合は、`mainImage` の行を削除します。

## 表示されないとき

- `draft: false` になっているか確認します。
- `slug` がほかの記事と重複していないか確認します。
- ファイルを保存したか確認します。
- 開発画面を更新します。
