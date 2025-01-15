import "./Footer.css";

import gitHubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &#169; 2025 Nathaniel Daley, Powered by&nbsp;
        <a
          href="https://newsapi.org/"
          target="_blank"
          className="footer__link-color_copyright footer__link"
        >
          <span
            data-content="News Api"
            aria-hidden="true"
            className="footer__link-transition"
          ></span>
          News Api
        </a>
      </div>
      <div className="footer__links">
        <a href="#" className="footer__link footer__link_color">
          <span
            data-content="Home"
            aria-hidden="true"
            className="footer__link-transition"
          ></span>
          Home
        </a>
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
    </footer>
  );
}

export default Footer;
