import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
	const avatarRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateAvatar({
			avatar: avatarRef.current.value
		})
	}

	useEffect(() => {
		avatarRef.current.value = ''
	}, [isOpen])

	return ( 
		<PopupWithForm
			name="avatar"
			title="Обновить аватар"
			buttonText="Сохранить"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<fieldset className="form__inputs">
				<label className="form__field">
					<input 
						ref={avatarRef}
						id="avatar-input"
						name="avatar-link"
						className="form__item form__item_el_avatar"
						type="url"
						placeholder="https://somewebsite.com/someimage.jpg"
						required
					/>
					<span className="avatar-input-error form__item-error"></span>
				</label>
			</fieldset>
		</PopupWithForm>
	 );
}

export default EditAvatarPopup;