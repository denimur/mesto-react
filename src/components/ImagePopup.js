function ImagePopup(props) {
	const { card, onClose, isOpen } = props;
	const { name, link } = card;

	return ( 
		<div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__image-container">
				<img
					className="popup__image"
					alt={ name }
					src={ link }
				/>
				<p className="popup__image-description">{ name }</p>
				<button
					className="popup__close-btn popup__close-btn_place_image"
					type="button"
					onClick={ onClose }
				></button>
			</div>
		</div>
	 );
}

export default ImagePopup;