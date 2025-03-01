import Icon from "../Icon/Icon";
import styles from "./Header.module.css";
import SidePanelButton from "../SidePanelButton/SidePanelButton";
import { useState, useEffect } from "react";

const Header = ({ openMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
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
