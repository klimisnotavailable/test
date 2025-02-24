import PropTypes from "prop-types";
import styles from "./AdvantagesListItem.module.css";
import Icon from "../Icon/Icon";

const AdvantagesListItem = ({ item, totalItems, index }) => {
  return (
    <li className={styles.item}>
      <p className={styles.itemIndex}>
        <span>_00{index + 1}</span>/
        <span className={styles.totalItems}>{`00${totalItems}`}</span>
      </p>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemText}>{item.text}</p>
      <Icon id={item.iconId} style={styles.itemIcon} />
      <Icon id={item.iconId} style={styles.itemIconDesktop} />
    </li>
  );
};

AdvantagesListItem.propTypes = {
  item: PropTypes.object,
  totalItems: PropTypes.string,
  index: PropTypes.number,
};

export default AdvantagesListItem;
