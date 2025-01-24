import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header({ handleLoginClick, handleLogoutClick }) {
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
    </header>
  );
}

export default Header;
