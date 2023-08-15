import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://github.com/Kdubb219">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/kyla-wise-b450b1104/">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/kwise219">
          <FaInstagram /> Instagram
        </a>
      </div>
      <p>&copy; 2023 Kyla's Developer Portfolio</p>
    </div>
  );
};

export default Footer;