import React, { useState } from "react";
import "../css/contactUs.css";

export const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log form data
    console.log("Form submitted:", form);
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};
