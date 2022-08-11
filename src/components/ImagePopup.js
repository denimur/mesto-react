function ImagePopup() {
	return ( 
		<div className="popup popup_type_image">
			<div className="popup__image-container">
				<img className="popup__image" alt="" />
				<p className="popup__image-description"></p>
				<button className="popup__close-btn popup__close-btn_place_image" type="button"></button>
			</div>
		</div>
	 );
}

export default ImagePopup;