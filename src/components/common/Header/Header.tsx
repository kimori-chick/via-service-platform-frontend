import styles from '../../../styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <a href="/" className={styles.header_logo}>
          <img src="/logo.png" alt="ロゴ" />
        </a>
        <input className={styles.header_searchInput} placeholder="検索..." />
        <div className={styles.header_userMenu}>
          <button className={styles.header_loginButton}>ログイン</button>
          <div className={styles.header_accountMenu}>
            <button className={styles.header_mailButton}>メール</button>
            <button className={styles.header_accountButton}>
              <img
               className={styles.header_accountImage}
              />
              <span className={styles.header_accountName}>h.mori.0205</span>
            </button>
          </div>
        </div>
      </div>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_ul}>
          <li className={styles.header_nav_item}>ホーム</li>
          <li className={styles.header_nav_item}>マイプラン</li>
          <li className={styles.header_nav_item}>イベント</li>
          <li className={styles.header_nav_item}>マップ</li>
          <li className={styles.header_nav_item}>マイページ</li>
        </ul>
      </nav>
    </header>
  );
};
