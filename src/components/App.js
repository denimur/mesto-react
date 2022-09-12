import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { api } from './utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopupOpened, setImagePopupOpened] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  useEffect(() => {
		api.getInitialCards()
			.then(initialCards => {
				setCards(initialCards)
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
			.then(setCards(state => state.filter(c => c._id !== card._id)))
			.catch(err => console.log(err))
	}
  
  useEffect(() => {
    api.getUserInfo()
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err))
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopupOpened(true)
  }

  function handleDeleteBtnClick() {
    setConfirmPopupOpen(true)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setConfirmPopupOpen(false)
    setImagePopupOpened(false)
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
          onCardDelete={handleCardDelete}
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
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
