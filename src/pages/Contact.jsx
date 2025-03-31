import React, { useState } from "react";
import emailjs from "emailjs-com";
import BackgroundScene from "../three/BackgroundScene";

function Contact() {
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
        "service_yek94ig", // EmailJS service ID
        "template_ukdyl2r", // EmailJS template ID
        formData,
        "Nv6ECDM1A_Lj6sQ-X" // EmailJS user ID
      )
      .then(
        () => {
          setNotification({
            message: "Nachricht erfolgreich gesendet!",
            type: "success",
          });
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        () => {
          setNotification({
            message:
              "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder überprüfen Sie die Kontaktinformationen im Lebenslauf.",
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
      <h1>Kontaktieren Sie mich</h1>
      <form onSubmit={handleSubmit} className="contact-form">

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="Vorname"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Nachname"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="E-Mail-Adresse"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Ihre Nachricht"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Send Button */}
        <button type="submit">Nachricht senden</button>
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
    </div>
  );
}

export default Contact;
