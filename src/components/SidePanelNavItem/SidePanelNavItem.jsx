import styles from "./SidePanelNavItem.module.css";
import PropTypes from "prop-types";

const SidePanelNavItem = ({ item }) => {
  return (
    <li className={`${styles.item}`}>
      <a className={`${styles.link}`} href="">
        {item.page}
      </a>
    </li>
  );
};

SidePanelNavItem.propTypes = {
  item: PropTypes.object,
};

export default SidePanelNavItem;
