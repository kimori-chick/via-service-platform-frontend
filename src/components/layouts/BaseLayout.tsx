import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  description?: string;
  children: ReactNode;
}

const BaseLayout = ({ title = 'My App', description = 'Default description', children }: Props) => {
  return (
    <>
      <Helmet>
        {/* <title>{title}</title> */}
        <title>Viand 旅行プラン作成アプリ</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="ページのタイトル" />
        <meta property="og:description" content="説明文" />
        <meta property="og:image" content="画像のURL" />
        <meta property="og:url" content="https://example.com/page" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./styles/common.css" />

        {/* PWA設定 */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <meta name="theme-color" content="#ffffff" /> */}

        {/* Apple Touch Icon / モバイル用設定 */}
        {/* <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" /> */}
        {/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
