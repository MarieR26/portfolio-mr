import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ad6qprm",
      "template_rf7ykta",
      form.current,
      "B7bNhst_Ujd5y1NOh"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail size={23} className="contact__option-icon" />
            <h4>Email</h4>
            <h5>revazishvili.mariam26@gmail.com </h5>
            <a href="mailto:revazishvili.mariam26@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <SiMessenger size={20} className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mariam Revazishvili</h5>
            <a href="https://m.me/100009908619692" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp size={23} className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+995 591 05 97 40</h5>
            <a href="https://wa.me/+995591059740" target="_blank">
              Send a Message
            </a>
          </article>
        </div>

        {/* End of contact section */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
