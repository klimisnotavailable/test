import styles from "./Hero.module.css";
import Slogan from "../../../../components/Slogan/Slogan";
import OrderCourseBtn from "../../../../components/OrderCourseBtn/OrderCourseBtn";

const Hero = ({ openModal }) => {
  return (
    <section className={`${styles.heroSection}`}>
      <div className={`container ${styles.heroCont}`}>
        <Slogan />
        <p className={`${styles.subtitle}`}>create your legacy</p>
        <h1 className={`${styles.pageTitle}`}>tattoing from scratch</h1>
        <OrderCourseBtn
          openModal={openModal}
          arrow={styles.arrow}
          arrowCont={styles.arrowCont}
        >
          join the course
        </OrderCourseBtn>
      </div>
    </section>
  );
};

export default Hero;
