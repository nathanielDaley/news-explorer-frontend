import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__title">NewsExplorer</div>
      <Navigation></Navigation>
    </div>
  );
}

export default Header;
