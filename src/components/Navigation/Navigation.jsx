import { useLocation } from "react-router-dom";

import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation({ handleLoginClick }) {
  const { pathname } = useLocation();

  return (
    <div className="navigation">
      <button
        type="button"
        disabled={pathname === "/" ? true : false}
        className={`navigation__link ${
          pathname === "/"
            ? "navigation__color_primary navigation__link_highlighted_primary_color navigation__link_disabled"
            : "navigation__color_secondary"
        }`}
      >
        Home
      </button>
      <button
        type="button"
        disabled={pathname === "/" ? flase : true}
        className={`navigation__link navigation__color_secondary navigation__link_highlighted_secondary_color ${
          pathname === "/"
            ? " navigation__link_hidden"
            : " navigation__link_disabled"
        }`}
      >
        Saved articles {pathname}
      </button>
      <button
        type="button"
        onClick={handleLoginClick}
        className={`navigation__sign-in-button ${
          pathname === "/" ? "" : "navigation__button_hidden"
        } navigation__button_primary_color`}
      >
        Sign in
      </button>
      <button
        className={`navigation__logout-button navigation__button_secondary_color ${
          pathname === "/" ? "navigation__button_hidden" : ""
        }`}
      >
        Elise
        <img
          src={logoutIcon}
          alt="Logout icon"
          className="navigation__logout-icon"
        />
      </button>
    </div>
  );
}

export default Navigation;
