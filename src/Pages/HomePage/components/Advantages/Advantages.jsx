import AdvantagesList from "../../../../components/AdvantagesList/AdvantagesList";
import styles from "./Advantages.module.css";
import bgDesktop from "../../../../../public/shared/bg`s/hero-bg-desktop.jpg";
import bgDesktop2x from "../../../../../public/shared/bg`s/hero-bg-desktop@2x.jpg";

const Advantages = () => {
  return (
    <section className={styles.section}>
      <div className="container">
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

export default Advantages;
