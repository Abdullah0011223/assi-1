"use client";

import React from "react";
import styles from "./Contact.module.css";  // Import the CSS module correctly

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.subheading}>
        If you have any questions or feedback, please reach out to us using the form below.
      </p>

      <form className={styles.contactForm}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className={styles.inputField}
        />
        <textarea
          placeholder="Your Message"
          required
          className={styles.textareaField}
        />
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>

      <div className={styles.footer}>
        <p>Thank you for reaching out! We&apos;ll get back to you shortly.</p> {/* Escaped apostrophe */}
        <p>Or visit our <a href="/" className={styles.link}>homepage</a> to learn more about us.</p>
      </div>
    </div>
  );
};

export default ContactForm;
