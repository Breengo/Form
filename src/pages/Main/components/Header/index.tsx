import styles from "./styles.module.scss";

import folderIcon from "../../../../assets/icons/folder.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.img}>СФ</div>
      <div className={styles.contacts}>
        <h2 className={styles.name}>Сергей Федосеев</h2>
        <div className={styles.anchors}>
          <a href="https://t.me/Breengo">
            <img src={folderIcon} alt="error" />
            Telegram
          </a>
          <a href="https://github.com/Breengo">
            <img src={folderIcon} alt="error" />
            Github
          </a>
          <a href="https://hh.ru/resume/a0bebb13ff0afd48890039ed1f364869553152">
            <img src={folderIcon} alt="error" />
            Резюме
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
