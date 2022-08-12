import { useEffect, useState } from 'react';
import { api } from './utils/api';
import Card from './Card';

function Main(props) {

	const [userName, setUserName] = useState(null)
	const [userAvatar, setUserAvatar] = useState(null)
	const [userDescription, setUserDescription] = useState(null)
	const [cards, setCards] = useState([])
	
	useEffect(() => {
		api.getUserInfo()
			.then((user) => {
				setUserName(user.name);
				setUserAvatar(user.avatar);
				setUserDescription(user.about);
			})
			.catch(err => console.log(err))
		}, []
	)
	
	useEffect(() => {
		api.getInitialCards()
			.then(initialCards => {
				setCards(initialCards)
			})
			.catch(err => console.log(err))
		}, []
	)

	return (
		<main className="content">

			<section className="profile">
				<div className="profile__overlay" onClick={ props.onEditAvatar }>
					<img
						className="profile__avatar"
						src={ userAvatar }
						alt={ userName } />
				</div>
				<div className="profile__info">
					<h1 className="profile__name overflow-hidden">{ userName }</h1>
					<button
						className="profile__edit-btn"
						type="button"
						onClick={ props.onEditProfile }></button>
					<p className="profile__activity overflow-hidden">{ userDescription }</p>
				</div>
				<button
					className="profile__add-btn"
					type="button"
					onClick={ props.onAddPlace }></button>
			</section>

			<section className="cards">
				{
					cards.map((card) =>
						<Card
							key={card._id}
							card={card}
							onCardClick={props.onCardClick}
							onDeleteBtnClick={props.onDeleteBtnClick}
						/>)
				}
			</section>

		</main>	
	);
}

export default Main;