import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mariam Revazishvili
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#experience"></a>experience
        </li>
        <li>
          <a href="#services"></a>Services
        </li>
        <li>
          <a href="#portfolio"></a>Portfolio
        </li>
        <li>
          <a href="#testimonials"></a>Testimonials
        </li>
        <li>
          <a href="#contact"></a>Contact
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://instagram.com" target="_blank">
          <GrInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>

      <dic className="footer__copyright">
        <small>&copy; Mariam Revazishvili. All rights reserved.</small>
      </dic>
    </footer>
  );
};

export default Footer;
