import styles from '../../../styles/modules/LeftMenu.module.css';

export const LeftMenu = () => {
  return (
    <div className={styles.leftMenuWrapper}>
      <section className={styles.leftMenu_section}>
        <h2 className={styles.leftMenu_section_title}>予定している旅行</h2>
        <ul className={styles.leftMenu_schedulePlan_list}>
          <li className={styles.leftMenu_schedulePlan_item}>
            <a href="#">
              <div className={styles.leftMenu_schedulePlan_basicInfo}>
                <p className={styles.leftMenu_schedulePlan_date}>
                  2025/06/30 ~ 2025/07/02
                </p>
                <p className={styles.leftMenu_schedulePlan_spot}>熱海</p>
              </div>
              <p className={styles.leftMenu_schedulePlan_title}>
                熱海2泊3日男5人旅！
              </p>
            </a>
          </li>
          <li className={styles.leftMenu_schedulePlan_item}>
            <a href="#">
              <div className={styles.leftMenu_schedulePlan_basicInfo}>
                <p className={styles.leftMenu_schedulePlan_date}>
                  2025/11/03 ~ 2025/11/04
                </p>
                <p className={styles.leftMenu_schedulePlan_spot}>別府</p>
              </div>
              <p className={styles.leftMenu_schedulePlan_title}>
                地元メン Wデート旅行
              </p>
            </a>
          </li>
          <li className={styles.leftMenu_schedulePlan_item}>
            <a href="#">
              <div className={styles.leftMenu_schedulePlan_basicInfo}>
                <p className={styles.leftMenu_schedulePlan_date}>
                  2025/12/30 ~ 2026/01/03
                </p>
                <p className={styles.leftMenu_schedulePlan_spot}>福岡県 仲間市</p>
              </div>
              <p className={styles.leftMenu_schedulePlan_title}>
                福岡帰省
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.leftMenu_section}>
        <h2 className={styles.leftMenu_section_title}>あなたへのおすすめプラン</h2>
        <ul className={styles.leftMenu_recommend_list}>
          <li className={styles.leftMenu_recommend_item}>
            <a href="#" className={styles.leftMenu_recommend_link}>
              <img
                src="../../../public/images/temp/img_plan_shinjuku.webp"
                className={styles.leftMenu_recommend_thumbnail}
                alt="記事サムネイル"
              />
              <div className={styles.leftMenu_recommend_info}>
                <span>新宿駅周辺で1日遊べる！最強デートプラン</span>
                <ul className={styles.leftMenu_recommend_tagList}>
                  <li className={styles.leftMenu_recommend_tagItem}>デート</li>
                  <li className={styles.leftMenu_recommend_tagItem}>新宿</li>
                </ul>
              </div>
            </a>
          </li>
          <li className={styles.leftMenu_recommend_item}>
            <a href="#" className={styles.leftMenu_recommend_link}>
              <img
                src="../../../public/images/temp/img_plan_shinjuku.webp"
                className={styles.leftMenu_recommend_thumbnail}
                alt="記事サムネイル"
              />
              <div className={styles.leftMenu_recommend_info}>
                <span>新宿駅周辺で1日遊べる！最強デートプラン</span>
                <ul className={styles.leftMenu_recommend_tagList}>
                  <li className={styles.leftMenu_recommend_tagItem}>デート</li>
                  <li className={styles.leftMenu_recommend_tagItem}>新宿</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.leftMenu_section}>
        <h2 className={styles.leftMenu_section_title}>あなたへのおすすめ記事</h2>
        <ul className={styles.leftMenu_recommend_list}>
          <li className={styles.leftMenu_recommend_item}>
            <a href="#" className={styles.leftMenu_recommend_link}>
              <img
                src="../../../public/images/temp/img_article_beach.jpg"
                className={styles.leftMenu_recommend_thumbnail}
                alt="記事サムネイル"
              />
              <div className={styles.leftMenu_recommend_info}>
                夏本番！都内から1時間で行けるビーチ8選！
              </div>
            </a>
          </li>
          <li className={styles.leftMenu_recommend_item}>
            <a href="#" className={styles.leftMenu_recommend_link}>
              <img
                src="../../../public/images/temp/img_article_beach.jpg"
                className={styles.leftMenu_recommend_thumbnail}
                alt="記事サムネイル"
              />
              <div className={styles.leftMenu_recommend_info}>
                夏本番！都内から1時間で行けるビーチ8選！
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};