import "./LoginModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal() {
  return (
    <ModalWithForm>
      <label htmlFor="login-email" className="login-modal__label">
        Email
        <input
          type="email"
          className="login-modal__input"
          id="login-email"
          name="email"
          placeholder="Enter email"
          value=""
          onChange=""
          required
        />
      </label>
      <label htmlFor="login-password" className="login-modal__label">
        Password
        <input
          type="password"
          className="login-modal__input"
          id="login-password"
          name="password"
          placeholder="Enter password"
          value=""
          onChange=""
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
