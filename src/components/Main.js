function Main() {

	function handleEditAvatarClick() {
		document.querySelector('.popup_type_avatar').classList.add('popup_opened')
	}
	function handleEditProfileClick() {
		document.querySelector('.popup_type_user').classList.add('popup_opened')
	}
	function handleAddPlaceClick() {
		document.querySelector('.popup_type_card').classList.add('popup_opened')
	}
	return (
		<main className="content">

			<section className="profile">
				<div className="profile__overlay" onClick={handleEditAvatarClick}>
					<img className="profile__avatar" alt="" />
				</div>
				<div className="profile__info">
					<h1 className="profile__name overflow-hidden">Жак-Ив Кусто</h1>
					<button
						className="profile__edit-btn"
						type="button"
						onClick={handleEditProfileClick}></button>
					<p className="profile__activity overflow-hidden">Исследователь океана</p>
				</div>
				<button
					className="profile__add-btn"
					type="button"
					onClick={handleAddPlaceClick}></button>
			</section>

			<section className="cards">	
			</section>

		</main>	
	);
}

export default Main;