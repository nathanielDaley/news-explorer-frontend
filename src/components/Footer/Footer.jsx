import { NavLink } from "react-router-dom";

import "./Footer.css";

import gitHubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &#169; 2025 Nathaniel Daley, Powered by News Api
      </div>
      <div className="footer__links">
        <NavLink to="/" className="footer__link footer__link_color">
          <span
            data-content="Home"
            aria-hidden="true"
            className="footer__link-transition"
          ></span>
          Home
        </NavLink>
        <a
          href="https://tripleten.com/"
          target="_blank"
          className="footer__link footer__link_color"
        >
          <span
            data-content="TripleTen"
            aria-hidden="true"
            className="footer__link-transition"
          ></span>
          TripleTen
        </a>
        <div className="footer__icon-links">
          <a
            href="https://github.com/nathanielDaley/news-explorer-frontend"
            target="_blank"
            className="footer__icon-link"
          >
            <img src={gitHubIcon} alt="gitHub icon" className="footer__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathanieldaley/"
            target="_blank"
            className="footer__icon-link"
          >
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              className="footer__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
