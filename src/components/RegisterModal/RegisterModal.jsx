import "./RegisterModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const REGISTER_MODAL_TITLE = "Sign up";
const REGISTER_MODAL_BUTTON_TEXT = "Sign up";
const REGISTER_MODAL_ALTERNATE_BUTTON_TEXT = "Sign in";
const REGISTER_MODAL_EMAIL_INPUT_LABEL_TEXT = "Email";
const REGISTER_MODAL_EMAIL_INPUT_PLACEHOLDER_TEXT = "Enter email";
const REGISTER_MODAL_PASSWORD_INPUT_LABEL_TEXT = "Password";
const REGISTER_MODAL_PASSWORD_INPUT_PLACEHOLDER_TEXT = "Enter password";
const REGISTER_MODAL_USERNAME_INPUT_LABEL_TEXT = "Username";
const REGISTER_MODAL_USERNAME_INPUT_PLACEHOLDER_TEXT = "Enter your username";

function RegisterModal({ activeModal }) {
  return (
    <ModalWithForm
      title={REGISTER_MODAL_TITLE}
      buttonText={REGISTER_MODAL_BUTTON_TEXT}
      altButtonText={REGISTER_MODAL_ALTERNATE_BUTTON_TEXT}
      isOpen={activeModal === "register"}
    >
      <label htmlFor="register-email" className="register-modal__label">
        {REGISTER_MODAL_EMAIL_INPUT_LABEL_TEXT}
        <input
          type="email"
          className="register-modal__input"
          id="register-email"
          name="email"
          placeholder={REGISTER_MODAL_EMAIL_INPUT_PLACEHOLDER_TEXT}
          value=""
          onChange=""
          required
        />
      </label>
      <label htmlFor="register-password" className="register-modal__label">
        {REGISTER_MODAL_PASSWORD_INPUT_LABEL_TEXT}
        <input
          type="password"
          className="register-modal__input"
          id="register-password"
          name="password"
          placeholder={REGISTER_MODAL_PASSWORD_INPUT_PLACEHOLDER_TEXT}
          value=""
          onChange=""
          required
        />
      </label>
      <label htmlFor="register-username" className="register-modal__label">
        {REGISTER_MODAL_USERNAME_INPUT_LABEL_TEXT}
        <input
          type="username"
          className="register-modal__input"
          id="register-username"
          name="username"
          placeholder={REGISTER_MODAL_USERNAME_INPUT_PLACEHOLDER_TEXT}
          value=""
          onChange=""
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
