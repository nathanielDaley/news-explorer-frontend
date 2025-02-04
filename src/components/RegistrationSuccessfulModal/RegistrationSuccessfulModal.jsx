import "./RegistrationSuccessfulModal.css";

import closeIcon from "../../assets/back.svg";

function RegistrationSuccessfulModal({
  activeModal,
  handleCloseClick,
  handleSubmitClick,
}) {
  return (
    <div
      className={`registration-successful-modal${
        activeModal === "registration-successful"
          ? " registration-successful-modal_opened"
          : ""
      }`}
    >
      <div className="registration-successful-modal__content">
        <h3 className="registration-successful-modal__title">
          Registration successfully completed!
        </h3>
        <button
          type="button"
          onClick={handleCloseClick}
          className="registration-successful-modal__close-button"
        >
          <img
            src={closeIcon}
            alt="close x"
            className="registration-successful-modal__close-icon"
          />
        </button>
        <button
          type="button"
          onClick={handleSubmitClick}
          className="registration-successful-modal__submit-button"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegistrationSuccessfulModal;
