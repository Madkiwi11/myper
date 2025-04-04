import React from "react";
import "./footer.css";  // استيراد ملف CSS الخاص بـ footer
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";  // استيراد الأيقونات من react-icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h2>Kiwi</h2>
          <p> Hi :) Welcome to my personal website where I showcase my projects, experiences, and more.</p>
        </div>
        
        <div className="footer-socials">
          <h3>Follow Me</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/fatima-hasan-886563263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap
              p" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Madkiwi11" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/1.chu?igsh=MXE2djRseHRtcXByMg==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>  fatimahasannazim@gmail.com </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
