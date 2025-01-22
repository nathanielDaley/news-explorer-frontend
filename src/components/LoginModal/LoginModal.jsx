import "./LoginModal.css";

import { useForm } from "../../hooks/useForm";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LOGIN_MODAL_TITLE = "Sign in";
const LOGIN_MODAL_BUTTON_TEXT = "Sign in";
const LOGIN_MODAL_ALTERNATE_BUTTON_TEXT = "Sign up";
const LOGIN_MODAL_EMAIL_INPUT_LABEL_TEXT = "Email";
const LOGIN_MODAL_EMAIL_INPUT_PLACEHOLDER_TEXT = "Enter email";
const LOGIN_MODAL_PASSWORD_INPUT_LABEL_TEXT = "Password";
const LOGIN_MODAL_PASSWORD_INPUT_PLACEHOLDER_TEXT = "Enter password";

function LoginModal({ activeModal, handleCloseClick, handleRegisterClick }) {
  const { values, handleChange, setValues } = useForm({});
  return (
    <ModalWithForm
      title={LOGIN_MODAL_TITLE}
      buttonText={LOGIN_MODAL_BUTTON_TEXT}
      altButtonText={LOGIN_MODAL_ALTERNATE_BUTTON_TEXT}
      isOpen={activeModal === "login"}
      handleCloseClick={handleCloseClick}
      handleAlternativeButtonClick={handleRegisterClick}
    >
      <label htmlFor="login-email" className="login-modal__label">
        {LOGIN_MODAL_EMAIL_INPUT_LABEL_TEXT}
        <input
          type="email"
          className="login-modal__input"
          id="login-email"
          name="email"
          placeholder={LOGIN_MODAL_EMAIL_INPUT_PLACEHOLDER_TEXT}
          value={values.email || ""}
          onChange={handleChange}
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
          value={values.password || ""}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
