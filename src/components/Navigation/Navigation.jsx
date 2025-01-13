import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__link navigation__color_primary navigation__link_highlighted_primary_color ">
        Home
      </div>
      <div className="navigation__link navigation__color_secondary navigation__link_highlighted_secondary_color navigation__link_hidden">
        Saved articles
      </div>
      <button className="navigation__sign-in-button navigation__button_primary_color">
        Sign in
      </button>
      <button className="navigation__logout-button navigation__button_secondary_color navigation__button_hidden">
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
