import { useContext, useEffect, useState } from 'react';
import { api } from './utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
	const user = useContext(CurrentUserContext)

	const [cards, setCards] = useState([])
	
	useEffect(() => {
		api.getInitialCards()
			.then(initialCards => {
				setCards(initialCards)
			})
			.catch(err => console.log(err))
		}, []
	)

	// function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some(i => i._id === user._id);
    
  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  //       setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
  //   });
	// }

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === user._id);
		if (!isLiked) {
			api.likeCard(card._id)
				.then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
				.catch(err => console.log(err))
		}
		else {
			api.dislikeCard(card._id)
				.then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
				.catch(err => console.log(err))
		}
	}

	function handleCardDelete(card) {
		api.deleteCard(card._id)
			.then(setCards(state => state.filter(c => c._id !== card._id)))
			.catch(err => console.log(err))
	}

	return (
		<main className="content">

			<section className="profile">
				<div className="profile__overlay" onClick={ props.onEditAvatar }>
					<img
						className="profile__avatar"
						src={ user.avatar }
						alt={ user.name } />
				</div>
				<div className="profile__info">
					<h1 className="profile__name overflow-hidden">{ user.name}</h1>
					<button
						className="profile__edit-btn"
						type="button"
						onClick={props.onEditProfile}
					></button>
					<p className="profile__activity overflow-hidden">{ user.about }</p>
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
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}
							onCardClick={props.onCardClick}
							onDeleteBtnClick={props.onDeleteBtnClick}
						/>)
				}
			</section>

		</main>	
	);
}

export default Main;