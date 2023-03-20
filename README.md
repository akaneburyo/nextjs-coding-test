# nextjs-coding-test

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nextjs-atbjdg)


# 要件
- テキスト(1行)入力できる
  - 名前 
  - メールアドレス
  - 市区町村
  - 以降の住所
- テキスト(複数行)入力できる
  - お問い合わせの詳細
- セレクトできる
  - 問い合わせ内容
  - 都道府県
- ボタン押下でAPIへリクエストできる
- 都道府県リストはAPIから取得できる
- レスポンシブ

# 選定

|||備考|
|--|--|--|
|UI|Chakra-UI||
|API Client|axios × aspida||
|APIの型生成|openapi2Aspida||
|Form|react-hook-form||
|validation|なし||


# コンポーネント

- Page
  - PageWrapper - タイトル、contentのカードのスタイル
- Form
  - ContactForm
- basics
  - input
    - InputText
    - InputTextArea
    - InputSelect


# 設計メモ
- Chakra-UIへの依存
  - components内のどの階層でも許可する

- react hook formへの依存
  - basics/formと、features/のForm系コンポーネントでのみ許可する

- fetch, post
  - hooksでのみ許可する
  - このhooksの使用はcomponents/pagesのみ許可する

# 進捗メモ
- 1 hour
  - 要件の整理が終わった
  - ライブラリの選定が終わった
  - 大まかなコンポーネント分割の設計、ディレクトリ設計が終わった
  - 選定したライブラリがだいたい使えるようになった

- 2 hour
  - 一番小さい単位のコンポーネントの実装が終わった
  - formでつかうコンポーネントの実装に入った
  - chakraのthemeで詰まった

- 3 hour
  - formで使うコンポーネント(react hook formに依存するもの)の実装が終わった
  - react-hook-formの型で詰まった

- 4 hour
  - formの実装が終わった
  - apiをつなぎ始めた

- 5 hour
  - axiosのバージョンが新しすぎた？ためか詰まった
  - とりあえずAPIはつながった

# 所感
- 想定時間はあると嬉しい
	- 細部を妥協するかの判断に使う

- schema
  - postにemailがなかったので足した
  - schemaが実態と異なるとこがあった
    - post
      - category -> title
      - prefecture_code => prefecture
    - get
      - items -> data.items
- あえてschemaの穴(うまく行かないところ)や設計の穴を作っておくとおもしろい…?
- 並べ替え、削除等が必要なものがあるとロジックを考慮する必要があり、おもしろいかも