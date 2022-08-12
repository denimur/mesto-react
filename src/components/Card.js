function Card(props) {
	const { card, onCardClick, onDeleteBtnClick } = props;
	const { name, link, likes } = card;

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
					<button className="like-group__icon" type="button"></button>
					<span className="like-group__count">{ likes.length }</span>
				</div>
			</div>	
			<button
				className="card__delete-btn"
				type="button"
				onClick={onDeleteBtnClick}
			></button>
		</article>
	 );
}

export default Card;