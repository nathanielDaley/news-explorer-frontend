import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__link navigation__link_selected">Home</div>
      <div className="navigation__link navigation__link_hidden">
        Saved articles
      </div>
      <button className="navigation__button">Sign in</button>
    </div>
  );
}

export default Navigation;
