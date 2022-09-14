function PopupWithForm(props) {
  const { name, title, buttonText, isOpen, children, onClose, onSubmit } =
    props;

  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form
          className={`form form_type_${name}`}
          name={name}
          onSubmit={onSubmit}
        >
          <h2 className="form__heading">{title}</h2>
          {children}
          <fieldset className="form__handlers">
            <button className="form__button" type="submit">
              {buttonText}
            </button>
          </fieldset>
        </form>
        <button className="popup__close-btn" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
