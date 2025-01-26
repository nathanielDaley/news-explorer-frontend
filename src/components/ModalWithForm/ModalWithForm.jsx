import "./ModalWithForm.css";

import closeIcon from "../../assets/back.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  altButtonText,
  isOpen,
  handleCloseClick,
  handleSubmitClick,
  handleAlternativeButtonClick,
  values,
}) {
  const submitForm = (event) => {
    event.preventDefault();

    handleSubmitClick(values);
  };

  return (
    <div
      className={`modal-with-form${isOpen ? " modal-with-form_opened" : ""}`}
    >
      <div className="modal-with-form__content">
        <h3 className="modal-with-form__title">{title}</h3>
        <button
          type="button"
          onClick={handleCloseClick}
          className="modal-with-form__close-button"
        >
          <img
            src={closeIcon}
            alt="close x"
            className="modal-with-form__close-icon"
          />
        </button>
        <form onSubmit={submitForm} className="modal-with-form__form" isValid>
          {children}
          <button type="submit" className="modal-with-form__submit-button">
            {buttonText}
          </button>
          <div className="modal-with-form__alternate-section">
            or{" "}
            <button
              type="button"
              onClick={handleAlternativeButtonClick}
              className="modal-with-form__alternate-button"
            >
              {altButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
