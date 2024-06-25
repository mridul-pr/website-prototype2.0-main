import "../pages/ContactUs.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";

const contactValidation = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  phone: Yup.string().required("Required").min(10, "Enter Valid Number"),
});

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e, resetForm) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yawh7op",
        "template_dntbn8l",
        form.current,
        "elRxhoXdU_jRPDmqp"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email Sent To Client");
          resetForm();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={contactValidation}
      onSubmit={(values, { resetForm }) => {
        sendEmail({ preventDefault: () => {} }, resetForm);
        console.log("Form Data:", values);
      }}
    >
      {(formik) => (
        <div className="contactus-wrapper">
          <form ref={form} onSubmit={formik.handleSubmit}>
            <div className="contactus-container">
              <h1 className="contactus-titles">Contact US</h1>
              <div className="contactus-items">
                <div className="contactus-form">
                  <h1 className="contactus-titles">Online Inquiry</h1>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="error-field">{formik.errors.name}</span>
                  )}
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="error-field">{formik.errors.email}</span>
                  )}
                  <input
                    type="tel"
                    placeholder="phone number"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <span className="error-field">{formik.errors.phone}</span>
                  )}
                  <input
                    type="text"
                    placeholder="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  <button type="submit">Submit</button>
                </div>
                <div className="contactus-details">
                  <h1 className="contactus-titles">Contact Details</h1>
                  <h1 className="contactus-detail">Tomy Sebastian</h1>
                  <h1 className="contactus-detail">+91 9845538087</h1>
                  <h1 className="contactus-detail">
                    No.72,"GIFT",4th Cross, Near Om Shakthi Temple, Horamavu
                    Post, Bengaluru - 560043
                  </h1>
                  <h1 className="contactus-detail">
                    atomengineers.tom@gmail.com
                  </h1>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}
