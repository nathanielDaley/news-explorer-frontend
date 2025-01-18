import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header() {
  return (
    <header className="header header__shadow_primary">
      <div className="header__title header__color_primary">NewsExplorer</div>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
