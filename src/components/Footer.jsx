import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>Developed by &copy; Nicolas Freitas</p>
      <div className="social-medias">
        <a href="https://github.com/yNickFtw" target={"_blank"}>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ynickftw/" target={"_blank"}>
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-freitas-a9073324a/"
          target={"_blank"}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
