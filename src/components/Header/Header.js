import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me-2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="  .container header__container" id="home">
        <h5>Hello, I'm</h5>
        <h1>Mariam Revazishvili</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
