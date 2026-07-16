# デザイン変更ガイド

このガイドでは、サイトのフォント、文字サイズ、色、余白、配置を自分で変更する方法を説明します。

デザインの変更は、主に次の2ファイルで行います。

- `src/styles/global.css`：サイト全体、ヘッダー、トップページ、一覧ページ
- `src/styles/article.css`：インタビュー記事の詳細ページ

記事本文のMarkdownや `src/content/` は、デザイン変更では触りません。

## 1. 変更前の準備

VS Codeでプロジェクトフォルダーを開き、ターミナルで次を実行します。

```powershell
cd "C:\Users\hikar\OneDrive\ドキュメント\インタビューサイトの作成"
npm.cmd run dev
```

ブラウザで `http://localhost:4321/` を開きます。CSSを保存すると、通常は自動的に画面へ反映されます。

変更前に編集するファイルをコピーしておくと、失敗しても戻せます。例：

```text
global.css → global-backup.css
```

ただし、バックアップファイルは `src/styles/` 以外の場所へ置くことをおすすめします。

## 2. CSSの基本的な読み方

CSSは、次の形で見た目を指定しています。

```css
.hero-copy h1 {
  font-size: 72px;
  color: #0a0a0a;
}
```

- `.hero-copy h1`：変更する場所
- `font-size`：文字サイズ
- `color`：文字色
- `{` と `}`：設定の開始と終了
- 行末の `;`：設定の区切り

波括弧やセミコロンを消すと、以降のデザインが反映されなくなることがあります。

## 3. サイト全体の色を変える

`src/styles/global.css` の先頭にある `:root` を編集します。

```css
:root {
  --color-background: #ffffff;
  --color-text: #0a0a0a;
  --color-accent: #0a0a0a;
  --color-subtext: #666666;
  --color-line: #cfcfcf;
  --color-section: #f2f2f2;
}
```

| 変数 | 使用場所 |
| --- | --- |
| `--color-background` | サイト全体の背景 |
| `--color-text` | 通常の文字、ロゴ、罫線 |
| `--color-accent` | リンクや記事番号 |
| `--color-subtext` | 日付、肩書き、補足文 |
| `--color-line` | 薄い区切り線 |
| `--color-section` | プロフィールなどの薄い背景 |

色は `#ffffff` のようなカラーコードで指定します。白黒を維持する場合は、文字色を完全な黒 `#000000` より少し柔らかい `#0a0a0a` にすると読みやすくなります。

## 4. フォントを変える

### サイト全体のフォント

`global.css` 先頭の次の部分を変更します。

```css
--font-serif: 'Noto Serif JP', 'Yu Mincho', serif;
--font-sans: 'Inter', 'Noto Sans JP', 'Yu Gothic', sans-serif;
```

- `--font-serif`：記事タイトルや本文で使う明朝体
- `--font-sans`：トップタイトル、メニュー、日付で使うゴシック体

左側に書かれたフォントから優先して使われます。

### Google Fontsを変更する

`global.css` の一番上に読み込み設定があります。

```css
@import url('https://fonts.googleapis.com/css2?...');
```

Google Fontsで使いたいフォントを選び、表示された `@import` をこの行と置き換えます。その後、`--font-serif` または `--font-sans` にフォント名を書きます。

例：

```css
--font-sans: 'Noto Sans JP', sans-serif;
```

フォント名に空白がある場合は、必ず `'` で囲みます。

## 5. トップページの大きなタイトルを変える

文字の内容は `src/pages/index.astro` にあります。

```astro
<h1>普通の人の、<em>普通ではない</em>話を聞く。</h1>
```

`<em>` と `</em>` で囲んだ部分には下線が付きます。下線が不要なら、タグだけを取り除きます。

文字サイズや改行は `global.css` の `.hero-copy h1` で調整します。

```css
.hero-copy h1 {
  font-size: clamp(46px, 6.7vw, 92px);
  line-height: 1.08;
  letter-spacing: -.065em;
  text-wrap: balance;
}
```

- `font-size`：文字サイズ
- `line-height`：行間。大きくすると行が離れます
- `letter-spacing`：文字間。マイナスにすると詰まります
- `text-wrap: balance`：各行の長さをなるべく均等にします

`clamp(最小, 画面幅に応じた値, 最大)` という書き方です。例えば最大サイズだけ少し小さくする場合：

```css
font-size: clamp(46px, 6.7vw, 80px);
```

不自然な改行を防ぐため、タイトルの途中に `<br />` を増やすのはなるべく避けてください。

## 6. トップページの配置と余白を変える

トップの高さと上下の余白は `.home-hero` です。

```css
.home-hero {
  min-height: 680px;
  padding: 110px 0 140px;
}
```

`padding: 上下左右` ではなく、ここでは次の順番です。

```text
padding: 上 右 下 左;
```

`110px 0 140px` は「上110px、左右0、下140px」という意味です。

タイトル部分の横幅は `.hero-copy` です。

```css
.hero-copy {
  width: min(1120px, 92%);
}
```

横幅を狭くすると改行が増え、広くすると1行が長くなります。

## 7. ヘッダーとロゴを変える

### ロゴの文字

`src/components/Header.astro` を編集します。

```astro
<span class="brand-mark" aria-hidden="true">H/B</span>
<span class="brand-ja">人と場のあいだ</span>
```

`H/B` と「人と場のあいだ」を好きな文字へ変更できます。

### ロゴの大きさ

`global.css` の `.brand-mark` を変更します。

```css
.brand-mark {
  width: 44px;
  height: 44px;
}
```

### ヘッダーの上下余白

```css
.site-header {
  padding: 24px 0;
}
```

### メニュー間の幅

```css
.site-nav {
  gap: 25px;
}
```

`gap` を小さくするとメニュー同士が近づきます。

メニュー名やリンク先を変える場合は `src/components/Header.astro` の `links` を編集します。

```ts
{ href: '/interviews/', label: '記事一覧' }
```

- `href`：移動先
- `label`：画面に表示する名前

## 8. 最新記事の文字サイズと余白

`global.css` の次の部分を使います。

```css
.featured {
  padding-top: 100px;
  padding-bottom: 140px;
}

.featured-copy h2 {
  margin: 0 0 14px;
  font-size: clamp(34px, 5vw, 64px);
}
```

- `padding-top`：最新記事セクション上部の空間
- `padding-bottom`：セクション下部の空間
- `margin`：タイトル周辺の空間
- `font-size`：記事タイトルの大きさ

`#01` とタイトルの間隔は次の指定です。

```css
.featured-copy .card-number {
  margin: 0 0 12px;
}
```

最後の `12px` を小さくすると間隔が狭くなります。

## 9. 記事一覧の列数と間隔

PCの2列表示は `.story-grid` です。

```css
.story-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 100px 48px;
}
```

`gap: 100px 48px` は、縦の間隔が100px、横の間隔が48pxです。

3列にする場合：

```css
grid-template-columns: repeat(3, minmax(0, 1fr));
```

ただし、タイトルが窮屈になるため、現在は2列を推奨します。

## 10. 記事詳細ページを変える

記事詳細は `src/styles/article.css` です。

### 記事タイトル

```css
.article-hero h1 {
  font-size: clamp(34px, 5vw, 64px);
  line-height: 1.35;
}
```

### 本文

```css
.article-body {
  max-width: var(--container-text);
  font-size: 17px;
  line-height: 2;
}
```

- `max-width`：本文の横幅
- `font-size`：本文文字サイズ
- `line-height`：本文の行間

本文の最大幅は `global.css` の次の変数で変えられます。

```css
--container-text: 680px;
```

読みやすさのため、620〜720px程度をおすすめします。

### 見出し前後の余白

```css
.article-body h2 {
  margin: 100px 0 34px;
}
```

上100px、左右0、下34pxです。

### 引用文

```css
.article-body blockquote {
  border-left: 2px solid var(--color-accent);
  font-size: clamp(22px, 3vw, 30px);
}
```

## 11. スマートフォンだけ変更する

`global.css` と `article.css` の下部にある次の部分がスマートフォン用です。

```css
@media (max-width: 720px) {
  /* スマートフォン用の設定 */
}
```

ここにある指定は、横幅720px以下でだけ適用されます。

例えばスマートフォンのトップタイトルを小さくする場合：

```css
@media (max-width: 720px) {
  .hero-copy h1 {
    font-size: 42px;
  }
}
```

スマートフォン本文は、読みやすさのため16px未満にしないことをおすすめします。

## 12. よく使うCSS設定

| 目的 | CSS |
| --- | --- |
| 文字サイズ | `font-size` |
| 太さ | `font-weight` |
| 行間 | `line-height` |
| 文字間 | `letter-spacing` |
| 文字色 | `color` |
| 背景色 | `background` |
| 外側の余白 | `margin` |
| 内側の余白 | `padding` |
| 最大横幅 | `max-width` |
| 要素間の間隔 | `gap` |
| 区切り線 | `border` |
| 左右中央配置 | `margin-inline: auto` |

## 13. 変更後の確認

最低限、次を確認します。

1. トップページをPC幅で確認
2. ブラウザの幅を狭めてスマートフォン表示を確認
3. 記事一覧を確認
4. 長いタイトルの記事を確認
5. 記事詳細の本文と引用を確認
6. 最後にビルドを実行

```powershell
npm.cmd run build
```

`0 errors` と表示されれば完了です。

## 14. 変更が反映されないとき

- ファイルを保存したか確認します（`Ctrl + S`）。
- ブラウザを再読み込みします。
- ターミナルで開発サーバーが動いているか確認します。
- `Ctrl + C` で終了し、`npm.cmd run dev` をやり直します。
- `{`、`}`、`;` を消していないか確認します。
- 同じ設定がスマートフォン用の `@media` 内で上書きされていないか確認します。

## 15. 元に戻したいとき

変更直後なら、VS Codeで `Ctrl + Z` を押します。複数回押すと、変更前まで戻れます。

どこを変更したか分からなくなった場合は、変更したファイル名と、実現したかった見た目をCodexへ伝えてください。スクリーンショットも添付すると確認しやすくなります。
