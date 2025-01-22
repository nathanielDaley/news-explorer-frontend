import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header({ handleLoginClick }) {
  return (
    <header className="header header__shadow_primary">
      <div className="header__title header__color_primary">NewsExplorer</div>
      <Navigation handleLoginClick={handleLoginClick}></Navigation>
    </header>
  );
}

export default Header;
