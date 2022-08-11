function PopupWithForm(props) {
  // const isAvatar = props.name === 'avatar';
  const isConfirm = props.name === 'confirm';
  // const isUser = props.name === 'user';
  const isCard = props.name === 'card';

	return ( 
		<div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form className={`form form_type_${props.name}`}>
          <h2 className="form__heading">{props.title}</h2>
          { props.children }
          <fieldset className="form__handlers">
            <button className="form__button" type="submit">
              {isConfirm ? 'Да' : isCard ? 'Создать' : 'Сохранить'}
            </button>
          </fieldset>
          </form>
          <button className="popup__close-btn" onClick={props.onClosePopup}></button>
        </div>
      </div>
	 );
}

export default PopupWithForm;