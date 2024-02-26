import React, { useState } from "react";
import { filter, detect } from "curse-filter";
import { motion } from "framer-motion";
import { contactData } from "../../Data/contactData";
import "./contact.css";

const Contact = () => {
  const [buttonText, setButtonText] = useState(contactData.sendButton.text);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText(contactData.sendButton.onClick);

    const form = event.target;
    const formData = new FormData(form);

    const message = formData.get("Message");
    const isInappropriate = detect(message, contactData.curseWordsLangs);

    const messageID = "contact-message";
    const messageElement = document.getElementById(messageID);

    if (isInappropriate) {
      messageElement.innerHTML = contactData.inappropriateMessage;
      setButtonText(contactData.sendButton.failureMessage);
      setTimeout(() => {
        messageElement.innerHTML = "";
        setButtonText(contactData.sendButton.text);
      }, 3000);
    }

    // const filteredMessage = filter(message);
    // formData.set("Message", filteredMessage);

    const scriptURL = contactData.scriptURL;

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (!isInappropriate) {
          messageElement.innerHTML = contactData.successMessage;
          setButtonText(contactData.sendButton.successMessage);
        }
        setTimeout(() => {
          messageElement.innerHTML = "";
          setButtonText(contactData.sendButton.text);
        }, 4000);
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        messageElement.innerHTML = contactData.failureMessage;
      });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-row">
        <div className="contact-left">
          <h1 className="contact-sub-title">{contactData.heading}</h1>
          <p>
            <i className="fa-solid fa-paper-plane"></i>
            <span className="contact-me-info">
              {contactData.contactInfo.email}
            </span>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span className="contact-me-info">
              {contactData.contactInfo.phone}
            </span>
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

        <div className="contact-right">
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea name="Message" rows="6" placeholder="Message"></textarea>
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
