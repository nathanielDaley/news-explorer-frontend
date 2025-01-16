import "./RegisterModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal() {
  return (
    <ModalWithForm>
      <label htmlFor="register-email" className="register-modal__label">
        Email
        <input
          type="email"
          className="register-modal__input"
          id="register-email"
          name="email"
          placeholder="Enter email"
          value=""
          onChange=""
          required
        />
      </label>
      <label htmlFor="register-password" className="register-modal__label">
        Password
        <input
          type="password"
          className="register-modal__input"
          id="register-password"
          name="password"
          placeholder="Enter Password"
          value=""
          onChange=""
          required
        />
      </label>
      <label htmlFor="register-username" className="register-modal__label">
        Username
        <input
          type="username"
          className="register-modal__input"
          id="register-username"
          name="username"
          placeholder="Enter your username"
          value=""
          onChange=""
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
