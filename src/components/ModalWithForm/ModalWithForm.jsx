import "./ModalWithForm.css";

import closeIcon from "../../assets/back.svg";

function ModalWithForm({ children }) {
  return (
    <div className="modal-with-form">
      <div className="modal-with-form__content">
        <h3 className="modal-with-form__title">Sign in</h3>
        <button className="modal-with-form__close-button">
          <img
            src={closeIcon}
            alt="close x"
            className="modal-with-form__close-icon"
          />
        </button>
        <form className="modal-with-form__form">
          {children}
          <button className="modal-with-form__submit-button">Sign in</button>
          <div className="modal-with-form__alternate-section">
            or{" "}
            <button className="modal-with-form__alternate-button">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
