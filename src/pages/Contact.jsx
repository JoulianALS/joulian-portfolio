import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import BackgroundScene from "../three/BackgroundScene";
import { LanguageContext } from "../App";

function Contact() {
  const { t, language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yek94ig",
        "template_ukdyl2r",
        formData,
        "Nv6ECDM1A_Lj6sQ-X"
      )
      .then(
        () => {
          setNotification({
            message: t.contact.success,
            type: "success",
          });
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        () => {
          setNotification({
            message: t.contact.error,
            type: "error",
          });
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Background */}
      <BackgroundScene />

      {/* Contact Form */}
      <h1>{t.contact.title}</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder={t.contact.firstName}
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder={t.contact.lastName}
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder={t.contact.email}
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder={t.contact.message}
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Send Button */}
        <button type="submit">{t.contact.send}</button>
      </form>

      {/* Notification */}
      {notification.message && (
        <p
          style={{
            color: notification.type === "success" ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {notification.message}
        </p>
      )}

      {/* Downloadable CV */}
      {/*
      <a
        href="./joulian-portfolio/lebenslauf.pdf"
        download="lebenslauf.pdf"
        className="download-cv"
      >
        Lebenslauf herunterladen
      </a>
      */}
    </div>
  );
}

export default Contact;
