import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
	const user = useContext(CurrentUserContext)

	const { cards, onCardLike, onCardDelete, onCardClick, onDeleteBtnClick } = props;

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
							onCardLike={onCardLike}
							onCardDelete={onCardDelete}
							onCardClick={onCardClick}
							onDeleteBtnClick={onDeleteBtnClick}
						/>)
				}
			</section>

		</main>	
	);
}

export default Main;