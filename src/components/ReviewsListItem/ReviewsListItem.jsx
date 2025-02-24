import styles from "./ReviewsListItem.module.css";
import Icon from "../Icon/Icon";

const ReviewsListItem = ({ data }) => {
  const { review, reviewer, photo } = data;
  return (
    <div className={styles.itemCont}>
      <p className={styles.review}>{review}</p>
      <p className={`${styles.reviewer}`}>
        <span className={styles.imgContainer}>
          <img src={photo} alt="" />
        </span>
        {reviewer}
      </p>
      <div className={`${styles.iconsCont}`}>
        <Icon style={styles.icon} id={"quote"} />
        <Icon style={styles.icon} id={"quote"} />
      </div>
      <div className={`${styles.bgItem} ${styles.bgItem1}`}></div>
      <div className={`${styles.bgItem} ${styles.bgItem2}`}></div>
      <div className={`${styles.bgItem} ${styles.bgItem3}`}></div>
    </div>
  );
};

export default ReviewsListItem;
