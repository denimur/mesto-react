function UserInput() {
	return ( 
		<fieldset className="form__inputs">
			<label className="form__field">
				<input
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
	 );
}

export default UserInput;