function Main() {
	return (
		<main className="content">

			<section className="profile">
				<div className="profile__overlay">
					<img className="profile__avatar" alt="" />
				</div>
				<div className="profile__info">
					<h1 className="profile__name overflow-hidden">Жак-Ив Кусто</h1>
					<button className="profile__edit-btn" type="button"></button>
					<p className="profile__activity overflow-hidden">Исследователь океана</p>
				</div>
				<button className="profile__add-btn" type="button"></button>
			</section>

			<section className="cards">	
			</section>

		</main>	
	);
}

export default Main;