import Icon from "../Icon/Icon";
import styles from "./Header.module.css";
import SidePanelButton from "../SidePanelButton/SidePanelButton";

const Header = ({ openMenu }) => {
  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="">
          <Icon style={styles.companyLogo} id={"companyLogo"} />
        </a>
        <SidePanelButton openMenu={openMenu}></SidePanelButton>
      </div>
    </header>
  );
};

export default Header;
