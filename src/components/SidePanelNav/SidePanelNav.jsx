import styles from "./SidePanelNav.module.css";
import data from "./data";
import SidePanelNavItem from "../SidePanelNavItem/SidePanelNavItem";

const SidePanelNav = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {data.map((item, idx) => {
          return <SidePanelNavItem key={idx} item={item} />;
        })}
      </ul>
    </nav>
  );
};

export default SidePanelNav;
