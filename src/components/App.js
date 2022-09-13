import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopupOpened, setIsImagePopupOpened] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([initialCards, user]) => {
        setCards(initialCards)
        setCurrentUser(user)
			})
			.catch(err => console.log(err))
		}, []
  )
  
  function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
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
      .then(() => {
        setCards(state => state.filter(c => c._id !== card._id))
        closeAllPopups()
      })
			.catch(err => console.log(err))
	}

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpened(true)
  }

  function handleDeleteBtnClick(card) {
    setSelectedCard(card)
    setIsConfirmPopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsConfirmPopupOpen(false)
    setIsImagePopupOpened(false)
  }

  function handleAddPlace(card) {
    api.addCard(card)
      .then(card => {
        setCards([card, ...cards])
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleUpdateUser({name, about}) {
    api.editUserInfo({ name, about })
      .then(user => {
        setCurrentUser(user)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar({ avatar }) {
    api.editUserAvatar({ avatar })
      .then(user => {
        setCurrentUser(user)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">

        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onDeleteBtnClick={handleDeleteBtnClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
        />

        <Footer />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpened}
          onClose={closeAllPopups}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlace}
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <ConfirmPopup
          card={selectedCard}
          isOpen={isConfirmPopupOpen}
          onCardDelete={handleCardDelete}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
