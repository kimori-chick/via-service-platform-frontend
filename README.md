## ディレクトリ構成

```VIAnchor
src/
├── api/               ← Axios設定などを配置
├── app/               ← Redux store や hooks を管理
├── components/        ← UIパーツ（地図、サイドバーなど）
├── const/             ← アプリケーション全体で使用する定数を定義
├── features/          ← Redux sliceごとの機能単位ディレクトリ
├── pages/             ← 画面単位のコンポーネント（例: Home.tsx）
├── types/             ← TypeScript型定義
├── App.tsx
├── main.tsx
└── index.css
```

## 環境構築
```
git config --global core.autocrlf input
```
改行コードを統一するため、git の改行設定をしてください。