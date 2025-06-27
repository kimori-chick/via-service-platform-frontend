import styles from '../../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCalendar, faHouse, faMagnifyingGlass, faMapLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <a href="/" className={styles.header_logo}>
          <img
            src="../../../../public/images/sample_logo.jpg"
            className={styles.header_logoImage}
            alt="ロゴ"
          />
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
              <span className={styles.header_mailNotice}>8</span>
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
            <li className={styles.header_nav_item}>
              <a href="#">
                <FontAwesomeIcon
                  icon={faHouse}
                  className={styles.header_navIcon}
                />
                ホーム
              </a>
            </li>
          <li className={styles.header_nav_item}>
            <a href="#">
              <FontAwesomeIcon
                icon={faBookOpen}
                className={styles.header_navIcon}
              />
              マイプラン
            </a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#">
              <FontAwesomeIcon
                icon={faCalendar}
                className={styles.header_navIcon}
              />
              イベント
            </a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className={styles.header_navIcon}
              />
              マップ
            </a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#">
              <FontAwesomeIcon
                icon={faUser}
                className={styles.header_navIcon}
              />
              マイページ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
