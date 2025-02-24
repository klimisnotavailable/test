import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./OrderCourseBtn.module.css";

const OrderCourseBtn = ({ style, children, arrowCont, arrow, openModal }) => {
  return (
    <button onClick={() => openModal()} className={`${styles.button} ${style}`}>
      <span className={`${styles.buttonText}`}>
        {children}
        <Icon style={`${styles.corner} ${styles.topLeft}`} id={"corner"} />
        <Icon style={`${styles.corner} ${styles.bottomLeft}`} id={"corner"} />
        <Icon style={`${styles.corner} ${styles.bottomRight}`} id={"corner"} />
        <Icon style={`${styles.corner} ${styles.topRight}`} id={"corner"} />
      </span>
      <span className={`${styles.arrowCont} ${arrowCont}`}>
        <Icon style={`${styles.arrow} ${arrow}`} id={"turnedArrow"} />
      </span>
    </button>
  );
};

OrderCourseBtn.propTypes = {
  style: PropTypes.string,
  children: PropTypes.element,
  arrowCont: PropTypes.string,
  arrow: PropTypes.string,
  openModal: PropTypes.func,
};

export default OrderCourseBtn;
