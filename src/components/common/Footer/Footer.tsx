import styles from '../../../styles/modules/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer_siteMap}>
        <ul className={styles.footer_siteMap_navItem}>
          <li>
            <a href="#">サイトトップ</a>
          </li>
          <li>
            <a href="#">旅行プランを作る</a>
          </li>
          <li>
            <a href="#">タグから探す</a>
          </li>
          <li>
            <a href="#">プランの作り方</a>
          </li>
          <li>
            <a href="#">行先を探す</a>
          </li>
        </ul>
        <ul className={styles.footer_siteMap_navItem}>
          <li>
            <a href="#">マイプラン</a>
          </li>
          <li>
            <a href="#">しおり作成</a>
          </li>
          <li>
            <a href="#">しおり一覧</a>
          </li>
          <li>
            <a href="#">アルバム一覧</a>
          </li>
        </ul>
        <ul className={styles.footer_siteMap_navItem}>
          <li>
            <a href="#">イベント</a>
          </li>
          <li>
            <a href="#">イベントカレンダー</a>
          </li>
          <li>
            <a href="#">イベント一覧</a>
          </li>
          <li>
            <a href="#">今月の人気イベント</a>
          </li>
        </ul>
        <ul className={styles.footer_siteMap_navItem}>
          <li>
            <a href="#">マップ</a>
          </li>
          <li>
            <a href="#">地域検索</a>
          </li>
          <li>
            <a href="#">人気の地域</a>
          </li>
          <li>
            <a href="#">旅行先から決める</a>
          </li>
        </ul>
        <ul className={styles.footer_siteMap_navItem}>
          <li>
            <a href="#">マイページ</a>
          </li>
          <li>
            <a href="#">フォロー中ユーザー</a>
          </li>
          <li>
            <a href="#">ダッシュボード</a>
          </li>
          <li>
            <a href="#">お知らせ</a>
          </li>
          <li>
            <a href="#">設定</a>
          </li>
        </ul>
      </nav>
      <ul className={styles.footer_about}>
        <li>
          <a href="#">Viand とは</a>
        </li>
        <li>
          <a href="#">利用規約</a>
        </li>
        <li>
          <a href="#">プライバシーポリシー</a>
        </li>
        <li>
          <a href="#">広告について</a>
        </li>
        <li>
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
      <div className={styles.footer_bottom}>
        <p className={styles.footer_serviceName}>Viand</p>
        <p className={styles.footer_copyRight}>© Viand 2024 All rights reverced</p>
      </div>
    </footer>
  );
};
