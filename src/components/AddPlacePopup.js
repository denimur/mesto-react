import PopupWithForm from "./PopupWithForm";
import { useState } from 'react';

function AddPlacePopup(props) {

	const [name, setName] = useState('')
	const [link, setLink] = useState('')

	function handleChangeName(e) {
		setName(e.target.value)
	}

	function handleChangeLink(e) {
		setLink(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault();

		props.onAddPlace({ name, link });
		setName('')
		setLink('')
	} 

	return ( 
		<PopupWithForm
			name="card"
			title="Новое место"
			isOpen={props.isOpen}
			onSubmit={handleSubmit}
			onClose={props.onClose}
		>
			<fieldset className="form__inputs">
				<label className="form__field">
					<input
						value={name}
						onChange={handleChangeName}
						id="card-name-input"
						className="form__item form__item_el_card-name" 
						name="card-name"
						type="text" 
						placeholder="Название"
						minLength="2"
						maxLength="30"
						required
					/>
					<span className="card-name-input-error form__item-error"></span>
				</label>
				<label className="form__field">
					<input
						value={link}
						onChange={handleChangeLink}
						id="link-input"
						className="form__item form__item_el_card-link" 
						name="card-link"
						type="url" 
						placeholder="Ссылка на картинку"
						required
					/>
					<span className="link-input-error form__item-error"></span>
				</label>
			</fieldset>                                    
		</PopupWithForm>
	 );
}

export default AddPlacePopup;