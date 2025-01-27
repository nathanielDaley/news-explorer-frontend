import "./MobileModal.css";

import closeIcon from "../../assets/back.svg";
import whiteLogoutIcon from "../../assets/logout-white.svg";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function MobileModal({
  activeModal,
  handleCloseClick,
  handleLoginClick,
  handleLogoutClick,
  mobileHomeClick,
  mobileSavedArticlesClick,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <div
      className={`mobile-modal${
        activeModal === "mobile" ? " mobile-modal_opened" : ""
      }`}
    >
      <div className="mobile-modal__content">
        <div className={`mobile-modal__title`}>NewsExplorer</div>
        <button
          type="button"
          onClick={handleCloseClick}
          className="mobile-modal__close-button"
        >
          <img
            src={closeIcon}
            alt="close x"
            className="mobile-modal__close-icon"
          />
        </button>
        <div className="mobile-modal__links">
          <button
            type="button"
            onClick={mobileHomeClick}
            className="mobile-modal__link"
          >
            Home
          </button>
          {isLoggedIn && (
            <button
              type="button"
              onClick={mobileSavedArticlesClick}
              className="mobile-modal__link"
            >
              Saved articles
            </button>
          )}
          {!isLoggedIn && (
            <button
              type="button"
              onClick={handleLoginClick}
              className={`mobile-modal__sign-in-button`}
            >
              Sign in
            </button>
          )}
          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogoutClick}
              className={`mobile-modal__logout-button`}
            >
              {currentUser.name}
              <img
                src={whiteLogoutIcon}
                alt="Logout icon"
                className="mobile-modal__logout-icon"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileModal;
