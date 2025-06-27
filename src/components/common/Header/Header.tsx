import styles from '../../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <a href="/" className={styles.header_logo}>
          <img src="/logo.png" alt="ロゴ" />
        </a>
        <div  className={styles.header_searchInputWrapper}>
          <input className={styles.header_searchInput} placeholder="検索" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.header_searchIcon}
          />
        </div>
        <div className={styles.header_userMenu}>
          <button className={styles.header_loginButton}>ログイン</button>
          <div className={styles.header_accountMenu}>
            <button className={styles.header_mailButton}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.header_mailIcon}
              />
            </button>
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
