import PopupWithForm from "./PopupWithForm"
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

	const currentUser = useContext(CurrentUserContext);

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	function handleChangeName(e) {
		setName(e.target.value)
	}
	
	function handleChangeDescription(e) {
		setDescription(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault();

		props.onUpdateUser({ name, about: description });
	} 

	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]); 

	return (
		<PopupWithForm
			name="user"
			title="Редактировать профиль"
			isOpen={props.isOpen}
			onSubmit={handleSubmit}
			onClose={props.onClose}
		>
			<fieldset className="form__inputs">
				<label className="form__field">
					<input
						value={name || ''}
						onChange={handleChangeName}
						id="user-name-input"
						className="form__item form__item_el_user-name" 
						name="user-name"
						type="text" 
						placeholder="Имя"
						minLength="2"
						maxLength="40"
						required
					/>
					<span className="user-name-input-error form__item-error"></span>
				</label>
				<label className="form__field">
					<input
						value={description || ''}
						onChange={handleChangeDescription}
						id="activity-input"
						className="form__item form__item_el_user-activity" 
						name="user-activity"
						type="text" 
						placeholder="О себе"
						minLength="2"
						maxLength="200"
						required
					/>
					<span className="activity-input-error form__item-error"></span>
				</label>
			</fieldset>
		</PopupWithForm>
	)
}

export default EditProfilePopup;