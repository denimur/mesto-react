import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({ isOpen, card, onClose, onCardDelete }) {

	function handleSubmit(e) {
		e.preventDefault()
		
		onCardDelete(card)
	}

	return ( 
		<PopupWithForm
			name="confirm"
			title="Вы уверены?"
			buttonText="Да"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		/>
	 );
}

export default ConfirmPopup;