import styles from "./SidePanel.module.css";
import SidePanelHeader from "../../../../components/SidePanelHeader/SidePanelHeader";
import SidePanelNav from "../../../../components/SidePanelNav/SidePanelNav";
import OrderCourseBtn from "../../../../components/OrderCourseBtn/OrderCourseBtn";

const SidePanel = ({ menuIsOpen, closeMenu, openModal }) => {
  return (
    <aside className={`${styles.sidePanel} ${menuIsOpen ? styles.isOpen : ""}`}>
      <SidePanelHeader closeMenu={closeMenu} />
      <div className={`container ${styles.sidePanelCont}`}>
        <SidePanelNav />
        <section className={styles.ctaSection}>
          <h3 className={`${styles.ctaSlogan}`}>create your legacy</h3>
          <OrderCourseBtn
            openModal={openModal}
            style={styles.orderCourseBtn}
            arrowCont={styles.arrowCont}
            arrow={styles.arrow}
          >
            join the course
          </OrderCourseBtn>
          <footer className={styles.ctaFooter}>
            <a className={styles.footerMail} href="mailto:hypetatto@gmail.com">
              hypetatto@gmail.com
            </a>
            <div className={styles.rightsCont}>
              <p className={styles.rights}>(C) HYPE 2024</p>
              <p className={styles.allRightsReserved}>ALL RIGHTS RESERVED</p>
            </div>
          </footer>
        </section>
      </div>
    </aside>
  );
};

export default SidePanel;
