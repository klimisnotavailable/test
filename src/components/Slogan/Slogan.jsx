import Icon from "../Icon/Icon";
import styles from "./Slogan.module.css";

const Slogan = () => {
  return (
    <div className={`${styles.sloganCont}`}>
      <Icon style={styles.star} id={"star"} />
      <p className={`${styles.slogan}`}>
        Just a month away from creating your first tattoo
      </p>
      <Icon style={styles.globe} id={"globe"} />
    </div>
  );
};

export default Slogan;
