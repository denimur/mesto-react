import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

	const { card, onCardClick, onDeleteBtnClick } = props;
	const { name, link, likes } = card;
	const currentUser = useContext(CurrentUserContext)

	const isOwn = card.owner._id === currentUser._id
	const cardDeleteButtonClassName =
		(`card__delete-btn${!isOwn ? '_disabled' : ''}`)
	
	const isLiked = card.likes.some(i => i._id === currentUser._id)
	const cardLikeButtonClassName = (`like-group__icon${isLiked ? '_active' : ''}`)

	function handleCardClick() {
		onCardClick(card)
	}

	return ( 
		<article className="card">
			<img
				className="card__image"
				alt={ name }
				src={ link }
				onClick={(handleCardClick)}
			/>
			<div className="card__group">
				<p className="card__description overflow-hidden">{ name }</p>
				<div className="like-group">
					<button
						className={cardLikeButtonClassName}
						type="button"
					></button>
					<span className="like-group__count">{ likes.length }</span>
				</div>
			</div>	
			<button
				className={ cardDeleteButtonClassName }
				type="button"
				onClick={onDeleteBtnClick}
			></button>
		</article>
	 );
}

export default Card;