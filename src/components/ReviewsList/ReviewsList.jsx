import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import ReviewsListItem from "../ReviewsListItem/ReviewsListItem";
import Icon from "../Icon/Icon";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./ReviewsList.module.css";
import data from "./data";
import OrderCourseBtn from "../OrderCourseBtn/OrderCourseBtn";

const ReviewsList = ({ listContainer }) => {
  return (
    <div className={`${styles.swiperCont}`}>
      <button
        className={`swiper-button-prev ${styles.button} ${styles.navBtnTablet} ${styles.prevNavBtnTablet}`}
      >
        <Icon style={`${styles.icon} ${styles.arrowPrev}`} id={"swiperArrow"} />
      </button>

      <Swiper
        effect={"cards"}
        grabCursor={false}
        modules={[EffectCards, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        id="swiper"
        className={styles.swiper}
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ReviewsListItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

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

      <OrderCourseBtn
        style={styles.orderCourseBtn}
        arrowCont={styles.joinTheCourseIconCont}
      >
        Join the course
      </OrderCourseBtn>
    </div>
  );
};

export default ReviewsList;
