/*
 * Contact — Contact Section
 *
 * Two-column layout: left side shows contact details and social links;
 * right side is a form that submits to a Google Apps Script endpoint.
 *
 * Form flow:
 *   1. User fills in Name, Email, Message and submits.
 *   2. The message is scanned for profanity via curse-filter.
 *      If flagged the submission is blocked and a polite error shown.
 *   3. If clean, the form data is POSTed to the Google Apps Script URL
 *      defined in contactData.scriptURL.
 *   4. Button text cycles through four states: default → sending →
 *      success/failure → back to default after a short timeout.
 *
 * All user-facing strings (heading, contact info, button labels, feedback
 * messages) live in contactData.js so they can be updated without touching
 * this component.
 */

import React, { useState } from "react";
import { filter, detect } from "curse-filter";
import { motion } from "framer-motion";
import { contactData } from "./contactData";
import "./contact.css";

const Contact = () => {
  const [buttonText, setButtonText] = useState(contactData.sendButton.text);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText(contactData.sendButton.onClick);

    const form = event.target;
    const formData = new FormData(form);
    const message = formData.get("Message");

    const messageElement = document.getElementById("contact-message");

    /* Block inappropriate messages before hitting the API */
    const isInappropriate = detect(message, contactData.curseWordsLangs);
    if (isInappropriate) {
      messageElement.innerHTML = contactData.inappropriateMessage;
      setButtonText(contactData.sendButton.failureMessage);
      setTimeout(() => {
        messageElement.innerHTML = "";
        setButtonText(contactData.sendButton.text);
      }, 3000);
      return;
    }

    /* Submit to Google Apps Script */
    fetch(contactData.scriptURL, { method: "POST", body: formData })
      .then(() => {
        messageElement.innerHTML = contactData.successMessage;
        setButtonText(contactData.sendButton.successMessage);
        form.reset();
        setTimeout(() => {
          messageElement.innerHTML = "";
          setButtonText(contactData.sendButton.text);
        }, 4000);
      })
      .catch((error) => {
        console.error("Contact form error:", error.message);
        messageElement.innerHTML = contactData.failureMessage;
      });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-row">

        {/* ── Left column: info, socials, resume ── */}
        <div className="contact-left">
          <h1 className="contact-sub-title">{contactData.heading}</h1>

          <p>
            <i className="fa-solid fa-paper-plane"></i>
            <span className="contact-me-info">{contactData.contactInfo.email}</span>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span className="contact-me-info">{contactData.contactInfo.phone}</span>
          </p>

          <div className="contact-social-icons">
            {contactData.socialLinks.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>

          <motion.a
            href={contactData.button.url}
            download
            className="resume-button"
            style={{ marginBottom: "40px" }}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.8 }}
          >
            {contactData.button.text}
          </motion.a>
        </div>

        {/* ── Right column: contact form ── */}
        <div className="contact-right">
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <input type="text"  name="Name"    placeholder="Your Name"  required />
            <input type="email" name="Email"   placeholder="Your Email" required />
            <textarea           name="Message" rows="6" placeholder="Message"></textarea>

            <motion.button
              type="submit"
              className="contact-button"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.8 }}
            >
              {buttonText}
            </motion.button>
          </form>

          <span id="contact-message"></span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
