import styles from "./SidePanelHeader.module.css";
import Icon from "../Icon/Icon";

const SidePanelHeader = ({ closeMenu }) => {
  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.headerCont}`}>
        <Icon style={`${styles.companyLogo}`} id={"companyLogo"} />
        <h2 className={styles.menuTitle}>[menu]</h2>
        <button
          className={`${styles.closeMenuBtn}`}
          onClick={() => closeMenu()}
          type="button"
        >
          close
          <Icon style={styles.closeIcon} id={"closeSidePanelIcon"} />
        </button>
      </div>
    </header>
  );
};

export default SidePanelHeader;
