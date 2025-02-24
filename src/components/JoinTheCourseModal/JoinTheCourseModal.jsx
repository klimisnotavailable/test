import Modal from "../Modal/Modal";
import OrderCourseBtn from "../OrderCourseBtn/OrderCourseBtn";
import styles from "./JoinTheCourseModal.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import INITIAL_VALUES from "./initialValues";

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  phone: Yup.string()
    .min(9, "Too short")
    .max(11, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const JoinTheCourseModal = ({ modalIsOpen, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className={styles.formCont}>
        <h2 className={styles.formTitle}>Join the course</h2>
        <Formik
          validationSchema={validateSchema}
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form className={styles.form}>
            <label className={`${styles.label}`} htmlFor="name">
              <input
                type="text"
                className={styles.input}
                name="text"
                id="name"
                placeholder="Full Name"
              />
              <ErrorMessage name="name" component={"span"} />
            </label>
            <label className={`${styles.label}`} htmlFor="email">
              <input
                type="email"
                className={styles.input}
                name="email"
                id="email"
                placeholder="E-mail"
              />

              <ErrorMessage name="email" component={"span"} />
            </label>
            <label
              className={`${styles.phoneLabel} ${styles.label}`}
              htmlFor="phone"
            >
              <input
                type="tel"
                name="phone"
                id="phone"
                className={`${styles.input} ${styles.phoneInput}`}
                placeholder={"Phone Number*"}
                step={"any"}
                inputMode="numeric"
                min="0"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                autoComplete={"off"}
              />
              <ErrorMessage name="phone" component={"span"} />
            </label>
            <OrderCourseBtn
              type={"submit"}
              style={styles.orderCourseBtn}
              arrow={styles.arrow}
              arrowCont={styles.arrowCont}
            >
              Consultation
            </OrderCourseBtn>
          </Form>
        </Formik>
        <p className={styles.privacyPolicy}>
          By sending this form I confirm that I have read and accept the{" "}
          <span className={styles.privacyPolicyAccent}>Privacy Policy</span>
        </p>
      </div>
    </Modal>
  );
};

export default JoinTheCourseModal;

// <Field
//   id={"name"}
//   type={"text"}
//   name={"name"}
//   className={styles.input}
//   placeholder={"Full Name"}
// />;

// <Field
//   id="email"
//   type={"email"}
//   name={"email"}
//   className={styles.input}
//   placeholder={"E-mail"}
// />;

// <Field
//   id="phone"
//   type={"tel"}
//   name={"phone"}
//   className={`${styles.input} ${styles.phoneInput}`}
//   placeholder={"Phone Number*"}
//   step={"any"}
//   inputMode="numeric"
//   min="0"
//   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//   autoComplete={"off"}
// />;
