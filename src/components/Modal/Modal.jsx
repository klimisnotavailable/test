import ModalReact from "react-modal";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ modalIsOpen, closeModal, children }) => {
  const overlayClass = `${styles.ReactModal_Overlay} ${
    modalIsOpen && styles.isOpen
  }`;

  return (
    <ModalReact
      isOpen={modalIsOpen}
      closeTimeoutMS={300}
      overlayClassName={overlayClass}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={`${styles.reactModal_Content}`}
      bodyOpenClassName={styles.ReactModal__Body}
    >
      <button className={styles.closeBtn} onClick={closeModal}>
        <IoClose className={styles.closeIcon} />
      </button>
      {children}
    </ModalReact>
  );
};

export default Modal;
