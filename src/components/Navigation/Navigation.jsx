import { NavLink, useLocation } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import { useContext } from "react";

function Navigation({ handleLoginClick }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const { pathname } = useLocation();

  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "navigation__link navigation__color_primary navigation__link_highlighted_primary_color navigation__link_disabled"
            : "navigation__link navigation__color_secondary"
        }
      >
        Home
      </NavLink>
      <NavLink
        type="button"
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "navigation__link navigation__color_secondary navigation__link_highlighted_secondary_color navigation__link_disabled"
            : "navigation__link navigation__color_secondary navigation__link_highlighted_secondary_color navigation__link_hidden"
        }
      >
        Saved articles {pathname}
      </NavLink>
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
        {currentUser.name}
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
