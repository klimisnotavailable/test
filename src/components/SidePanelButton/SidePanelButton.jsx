import styles from "./SidePanelButton.module.css";
import Icon from "../Icon/Icon";

const MenuButton = ({ openMenu }) => {
  return (
    <button
      className={`${styles.button}`}
      onClick={() => openMenu()}
      type="button"
    >
      <span className={`${styles.buttonText}`}>MENU</span>
      <span className={`${styles.menuBurger}`}>
        <Icon style={styles.burgerIcon} id={"dot"} width={6} height={6} />
        <Icon style={styles.burgerIcon} id={"dot"} width={6} height={6} />
        <Icon style={styles.burgerIcon} id={"dot"} width={6} height={6} />
        <Icon style={styles.burgerIcon} id={"dot"} width={6} height={6} />
      </span>
    </button>
  );
};

export default MenuButton;

// { position: "absolute", top: "0px", left: "0px" }
// { position: "absolute", top: "0px", right: "0px" }
// { position: "absolute", bottom: "0px", left: "0px" }
// { position: "absolute", bottom: "0px", right: "0px" }
