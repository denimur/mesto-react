function Main(props) {

	return (
		<main className="content">

			<section className="profile">
				<div className="profile__overlay" onClick={props.onEditAvatar}>
					<img className="profile__avatar" alt="" />
				</div>
				<div className="profile__info">
					<h1 className="profile__name overflow-hidden">Жак-Ив Кусто</h1>
					<button
						className="profile__edit-btn"
						type="button"
						onClick={props.onEditProfile}></button>
					<p className="profile__activity overflow-hidden">Исследователь океана</p>
				</div>
				<button
					className="profile__add-btn"
					type="button"
					onClick={props.onAddPlace}></button>
			</section>

			<section className="cards">	
			</section>

		</main>	
	);
}

export default Main;