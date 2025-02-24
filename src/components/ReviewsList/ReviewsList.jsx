import styles from "./ReviewsList.module.css";
import ReviewsListItem from "../ReviewsListItem/ReviewsListItem";
import Icon from "../Icon/Icon";
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import data from "./data";

const ReviewsList = ({ listContainer }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation],

      direction: "horizontal",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className={`swiper ${styles.listContainer} ${listContainer}`}>
      <button
        className={`swiper-button-prev ${styles.button} ${styles.navBtnTablet} ${styles.prevNavBtnTablet}`}
      >
        <Icon style={`${styles.icon} ${styles.arrowPrev}`} id={"swiperArrow"} />
      </button>

      <ul className={`swiper-wrapper ${styles.list}`}>
        {data.map((item, idx) => {
          return (
            <li key={idx} className={`swiper-slide ${styles.item}`}>
              <ReviewsListItem data={item} />
            </li>
          );
        })}
      </ul>
      <button
        className={`swiper-button-next ${styles.button} ${styles.navBtnTablet} ${styles.nextNavBtnTablet}`}
      >
        <Icon style={`${styles.icon}`} id={"swiperArrow"} />
      </button>

      <div className={styles.swiperButtonsMobile}>
        <button className={`swiper-button-prev ${styles.button}`}>
          <Icon
            style={`${styles.icon} ${styles.arrowPrev}`}
            id={"swiperArrow"}
          />
        </button>
        <button className={`swiper-button-next ${styles.button}`}>
          <Icon style={`${styles.icon}`} id={"swiperArrow"} />
        </button>
      </div>
    </div>
  );
};

export default ReviewsList;
