import styles from "./Warning.module.css";
import WarningIconsSet from "../WarningIconsSet/WarningIconsSet";

const Warning = () => {
  return (
    <li className={styles.warningCont}>
      <WarningIconsSet iconFill={styles.iconFill} />
      <p className={`${styles.warning}`}>
        To be able to participate in this course you must be over 18 years old
      </p>
      <WarningIconsSet iconFill={styles.iconFill} />
    </li>
  );
};

export default Warning;
