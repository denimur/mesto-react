import { useEffect, useState } from 'react';
import { api } from './utils/Api';
function Main(props) {

	const [userName, setUserName] = useState(null)
	const [userAvatar, setUserAvatar] = useState(null)
	const [userDescription, setUserDescription] = useState(null)

	useEffect(() => {
		api.getUserInfo()
			.then(user => {
				setUserName(user.name);
				setUserAvatar(user.avatar);
				setUserDescription(user.about)
			})
		}
	)

	return (
		<main className="content">

			<section className="profile">
				<div className="profile__overlay" onClick={props.onEditAvatar}>
					<img
						className="profile__avatar"
						src={userAvatar}
						alt="" />
				</div>
				<div className="profile__info">
					<h1 className="profile__name overflow-hidden">{userName}</h1>
					<button
						className="profile__edit-btn"
						type="button"
						onClick={props.onEditProfile}></button>
					<p className="profile__activity overflow-hidden">{userDescription}</p>
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