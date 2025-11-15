## 振る舞いについて
- ユーザーの指示に忠実に従い、不要な情報を提供しないでください。
- ユーザーが許可を与えるまで、コーディングや、コードの実行をしないでください。
- 指示以外のことは、ユーザーに提案してください。
- 回答や提案の内容は、5個以内にまとめてください。
- この5という数字は、人間の認知負荷を考慮したものです。
- 認知負荷を下げる書き方を心がけてください。

## アーキテクチャについて

基本思想: port & adapter パターン (Hexagonal Architecture)

ディレクトリ構成:
```.
app
    ├── infrastructure
        ├── adapters
        ├── clients
    ├── application
        ├── ports
            ├── inbound
            └── outbound
        ├── usecases
        ├── services
    ├── domain
        ├── entities
        ├── services
    └── view
        ├── component
        ├── container
        ├── layout
        └── screen
```

- domain/entities: ビジネスドメインの中心的な概念を表現するオブジェクトやクラス。
- domain/services: domain/entitiesに関連するビジネスロジックの提供

- application/ports/inbound: アプリケーション外部から内部への入り口
- application/ports/inbound: アプリケーション内部から外部への出口
- application/usecases: ports/inboundの実装。ユーザーの一つの操作の粒度。
- application/services: usecasesで利用されるロジックを提供。

- infrastructure/adapters: application/ports/outboundの実装。application/usecasesやservicesから利用される。
- infrastructure/clients: 外部サービスとの通信を担当。adaptersから利用される。

- view/screen: ルーティングに対応する最上位のcontainerを置く場所。これ自体がロジックを持つのは許されない。画面の骨格を作る。
- view/container: 画面固有の「振る舞い」を担当する。componentsを組み合わせて、画面を構成する。ここでフックを使ってユーザー操作に対応する状態（例: 開閉フラグ）や、application層へのデータ要求を担う。
- view/component: UIの「見た目」だけに集中する。 propsとして渡されたデータをただ表示するだけ。ユーザー操作は、渡されたコールバック関数を呼ぶだけで、その中身（ロジック）には関知しない。
- view/layout: 画面内のレイアウトを定義する。

## 環境
- TypeScript
- React
- React Router v7
- Tailwind CSS

## コーディング規約
- クリック可能な要素には、必ず"stalker-target"クラスを付与してください。