function AvatarInput(props) {
	return (
		<fieldset className="form__inputs">
			<label className="form__field">
				<input 
					id={`${props.name}-input`}
					name={`${props.name}-link`}
					className="form__item form__item_el_avatar"
					type="url"
					placeholder="https://somewebsite.com/someimage.jpg"
					required
				/>
				<span className={`${props.name}-input-error`} form__item-error></span>
			</label>
		</fieldset>
	);
}

export default AvatarInput;