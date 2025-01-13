import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__link navigation__link_selected">Home</div>
      <div className="navigation__link navigation__link_hidden">
        Saved articles
      </div>
      <button className="navigation__sign-in-button">Sign in</button>
      <button className="navigation__logout-button navigation__logout-button_hidden">
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
