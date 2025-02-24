import styles from "./Reviews.module.css";
import ReviewsList from "../../../../components/ReviewsList/ReviewsList";
import OrderCourseBtn from "../../../../components/OrderCourseBtn/OrderCourseBtn";
const Reviews = ({ openModal }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        How our <br />
        ex-Students feel about the course?
      </h2>
      <ReviewsList listContainer={styles.listContainer} />
      <OrderCourseBtn
        openModal={openModal}
        style={styles.orderCourseBtn}
        arrowCont={styles.arrowCont}
      >
        join the course
      </OrderCourseBtn>
    </section>
  );
};

export default Reviews;
