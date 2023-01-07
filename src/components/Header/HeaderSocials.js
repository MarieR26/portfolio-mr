import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mariam-revazishvili-b24b76250/"
        target="_blank"
      >
        <AiFillLinkedin size={25} />
      </a>
      <a href="https://github.com/MarieR26" target="_blank">
        <AiOutlineGithub size={25} />
      </a>
      <a
        href="https://app.netlify.com/teams/revazishvili-mar/overview"
        target="_blank"
      >
        <SiNetlify size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
