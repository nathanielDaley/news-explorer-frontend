import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import mobileMenuIcon from "../../assets/mobile-menu.svg";
import mobileMenuIconBlack from "../../assets/mobile-menu-black.svg";

import "./Header.css";

function Header({
  handleLoginClick,
  handleLogoutClick,
  handleMobileMenuClick,
  activeModal,
}) {
  const { pathname } = useLocation();
  return (
    <header
      className={`header ${
        pathname === "/" ? "header__shadow_primary" : "header__shadow_secondary"
      }`}
    >
      <div
        className={`header__title ${
          pathname === "/" ? "header__color_primary" : "header__color_secondary"
        }`}
      >
        NewsExplorer
      </div>
      <Navigation
        handleLoginClick={handleLoginClick}
        handleLogoutClick={handleLogoutClick}
      ></Navigation>
      {activeModal === "" && (
        <button
          type="button"
          onClick={handleMobileMenuClick}
          className="header__mobile-menu-button"
        >
          {pathname === "/" && (
            <img
              src={mobileMenuIcon}
              alt="mobile menu icon"
              className="header__mobile-menu-icon"
            />
          )}
          {pathname === "/profile" && (
            <img
              src={mobileMenuIconBlack}
              alt="mobile menu icon"
              className="header__mobile-menu-icon"
            />
          )}
        </button>
      )}
    </header>
  );
}

export default Header;
