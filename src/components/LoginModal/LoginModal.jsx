import "./LoginModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import {
  LOGIN_MODAL_TITLE,
  LOGIN_MODAL_BUTTON_TEXT,
  LOGIN_MODAL_ALTERNATE_BUTTON_TEXT,
  LOGIN_MODAL_EMAIL_INPUT_LABEL_TEXT,
  LOGIN_MODAL_EMAIL_INPUT_PLACEHOLDER_TEXT,
  LOGIN_MODAL_PASSWORD_INPUT_LABEL_TEXT,
  LOGIN_MODAL_PASSWORD_INPUT_PLACEHOLDER_TEXT,
} from "../../utils/constants";

function LoginModal({ activeModal }) {
  return (
    <ModalWithForm
      title={LOGIN_MODAL_TITLE}
      buttonText={LOGIN_MODAL_BUTTON_TEXT}
      altButtonText={LOGIN_MODAL_ALTERNATE_BUTTON_TEXT}
      isOpen={activeModal === "login"}
    >
      <label htmlFor="login-email" className="login-modal__label">
        {LOGIN_MODAL_EMAIL_INPUT_LABEL_TEXT}
        <input
          type="email"
          className="login-modal__input"
          id="login-email"
          name="email"
          placeholder={LOGIN_MODAL_EMAIL_INPUT_PLACEHOLDER_TEXT}
          value=""
          onChange=""
          required
        />
      </label>
      <label htmlFor="login-password" className="login-modal__label">
        {LOGIN_MODAL_PASSWORD_INPUT_LABEL_TEXT}
        <input
          type="password"
          className="login-modal__input"
          id="login-password"
          name="password"
          placeholder={LOGIN_MODAL_PASSWORD_INPUT_PLACEHOLDER_TEXT}
          value=""
          onChange=""
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
