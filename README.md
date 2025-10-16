# ショッピングカートアプリケーション

Next.js と TypeScript で作成された本格的なショッピングカート機能を持つEコマースアプリケーションです。

## 機能

- 🛍️ **商品一覧表示**: カテゴリ別に整理された商品の表示
- 🔍 **検索・フィルター機能**: 商品名やカテゴリによる絞り込み
- 🛒 **ショッピングカート**: 商品の追加・削除・数量変更
- 📱 **レスポンシブデザイン**: モバイルとデスクトップに対応
- 💰 **リアルタイム価格計算**: 合計金額の自動計算
- 🎨 **モダンなUI**: Tailwind CSSによる美しいデザイン

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: React Context API + useReducer
- **アイコン**: SVG icons
- **フォント**: Geist

## セットアップ

開発サーバーを起動するには：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認してください。

## プロジェクト構造

```
src/
├── app/                 # Next.js App Router
├── components/          # Reactコンポーネント
│   ├── Cart.tsx        # カート表示
│   ├── CartIcon.tsx    # カートアイコン
│   ├── CartItem.tsx    # カートアイテム
│   ├── Header.tsx      # ヘッダー
│   ├── Layout.tsx      # レイアウト
│   ├── ProductCard.tsx # 商品カード
│   └── ProductList.tsx # 商品一覧
├── contexts/           # Context API
│   └── CartContext.tsx # カート状態管理
├── data/              # モックデータ
│   └── products.ts    # 商品データ
└── types/             # TypeScript型定義
    └── product.ts     # 商品関連の型
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
