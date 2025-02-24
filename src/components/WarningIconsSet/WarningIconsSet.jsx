import Icon from "../Icon/Icon";
import styles from "./WarningIconsSet.module.css";

const WarningIconsSet = ({ iconFill }) => {
  return (
    <div className={`${styles.iconsCont}`}>
      <div className={`${styles.iconsSet}`}>
        <Icon style={`${styles.icon} ${iconFill}`} id={"warningSight"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"starToLeft"} />
        <Icon style={`${styles.icon} ${iconFill} `} id={"iconsGroupLeft"} />
        <Icon
          style={`${styles.icon} ${styles.iconGlobe} ${iconFill}`}
          id={"warningGlobe"}
        />
        <Icon style={`${styles.icon} ${iconFill}`} id={"iconsGroupRight"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"starToRight"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"warningSight"} />
      </div>
      <div className={`${styles.iconsSet}`}>
        <Icon style={`${styles.icon} ${iconFill}`} id={"warningSight"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"starToLeft"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"iconsGroupLeft"} />
        <Icon
          style={`${styles.icon} ${styles.iconGlobe} ${iconFill}`}
          id={"warningGlobe"}
        />
        <Icon style={`${styles.icon} ${iconFill}`} id={"iconsGroupRight"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"starToRight"} />
        <Icon style={`${styles.icon} ${iconFill}`} id={"warningSight"} />
      </div>
    </div>
  );
};

export default WarningIconsSet;
