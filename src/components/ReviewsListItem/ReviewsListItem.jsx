import styles from "./ReviewsListItem.module.css";
import Icon from "../Icon/Icon";
import { useSwiperSlide } from "swiper/react";

const ReviewsListItem = ({ data }) => {
  const { review, reviewer, photo } = data;
  const slide = useSwiperSlide();
  return (
    <div
      className={`${styles.itemCont} ${slide.isActive ? "" : styles.notActive}`}
    >
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
    </div>
  );
};

export default ReviewsListItem;
