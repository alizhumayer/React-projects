import React from "react";
import Icon from "../img/footer_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footerSocial">
        FOLLOW US
        <br />
        <div id="socialIcons">
          <span>
            <FontAwesomeIcon icon={faSnapchat} size="lg" />
          </span>

          <span>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </span>
        </div>
      </div>
      <div className="footerCenter">
        <img src={Icon} alt="icon" />
      </div>
      <div className="footerInfo">CONTACT</div>
    </div>
  );
};

export default Footer;
