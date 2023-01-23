import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
//css
import "../../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-icons-container">
          <a
            href="https://www.instagram.com/lucianocolin/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/L.C975/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/lucianocolin_"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/luciano-colin-67476b180/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
        <p>©2023 Luciano Colin</p>
      </div>
    </>
  );
};

export default Footer;
