function CardInput() {
	return ( 
		<fieldset className="form__inputs">
			<label className="form__field">
				<input
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
	 );
}

export default CardInput;