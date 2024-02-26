import React from "react";
import "./contact.css";
import { filter, detect } from "curse-filter";
import resume from "../../assets/Yugam's Resume.pdf";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const message = formData.get("Message");
    const isInappropriate = detect(message, ["en", "hi", "fr"]);

    const messageID = "contact-message";
    const messageElement = document.getElementById(messageID);

    if (isInappropriate) {
      messageElement.innerHTML =
        "Message not sent. Inappropriate language used.";
      setTimeout(() => {
        messageElement.innerHTML = "";
      }, 5000);
    }

    const filteredMessage = filter(message);
    formData.set("Message", filteredMessage);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxslZ-mL_3gxmxT-Z2sG2eCYaVNNqDBN-2GLRV6PUY_qd9GDHw9-p4sBiT6Tw9VP1iv/exec";

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (!isInappropriate) {
          messageElement.innerHTML = "Message sent successfully.";
        }
        console.log(response);
        setTimeout(() => {
          messageElement.innerHTML = "";
        }, 2000);
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        messageElement.innerHTML = "Failed to send message. Try again later.";
      });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-row">
        <div className="contact-left">
          <h1 className="contact-sub-title">Lets get in touch.</h1>
          <p>
            <i className="fa-solid fa-paper-plane"></i>
            <span className="contact-me-info">yugampatel@gmail.com</span>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span className="contact-me-info">+1 204-970-1007</span>
          </p>

          <div className="contact-social-icons">
            <a
              href="https://www.facebook.com/yugampatel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/its.yugam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yugampatel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/YugamPatel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <a href={resume} download className="contact-button contact-button2">
            Download Resume
          </a>
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
            <button type="submit" className="contact-button contact-button2">
              Submit
            </button>
          </form>
          <span id="contact-message"></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
