import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
	const avatarRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		props.onUpdateAvatar({
			avatar: avatarRef.current.value
		})
		avatarRef.current.value = ''
	}

	return ( 
		<PopupWithForm
			name="avatar"
			title="Обновить аватар"
			isOpen={props.isOpen}
			onClose={props.onClose}
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