import styles from "./Hero.module.css";
import Slogan from "../../../../components/Slogan/Slogan";
import OrderCourseBtn from "../../../../components/OrderCourseBtn/OrderCourseBtn";
import AdvantagesList from "../../../../components/AdvantagesList/AdvantagesList";
import bgDesktop from "../../../../img/shared/bg`s/hero-bg-desktop.jpg";
import bgDesktop2x from "../../../../img/shared/bg`s/hero-bg-desktop@2x.jpg";

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
      <div className={`container ${styles.advantagesCont}`}>
        <h2 className={styles.sectionTitle}>who is this course for?</h2>
        <AdvantagesList />
      </div>
      <picture>
        <img
          className={styles.desktopBg}
          src={bgDesktop}
          alt=""
          srcSet={`${bgDesktop} 1x, ${bgDesktop2x} 2x`}
        />
      </picture>
    </section>
  );
};

export default Hero;
