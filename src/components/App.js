import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
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

  function handleUpdateUser({name, about}) {
    api.editUserInfo({ name, about })
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
        />

        <Footer />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpened}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__inputs">
            <label className="form__field">
              <input 
                id="avatar-input"
                name="avatar-link"
                className="form__item form__item_el_avatar"
                type="url"
                placeholder="https://somewebsite.com/someimage.jpg"
                required
              />
              <span className="avatar-input-error form__item-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        {/* <PopupWithForm
          name="user"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__inputs">
            <label className="form__field">
              <input
                id="user-name-input"
                className="form__item form__item_el_user-name" 
                name="user-name"
                type="text" 
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="user-name-input-error form__item-error"></span>
            </label>
            <label className="form__field">
              <input
                id="activity-input"
                className="form__item form__item_el_user-activity" 
                name="user-activity"
                type="text" 
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="activity-input-error form__item-error"></span>
            </label>
          </fieldset>
        </PopupWithForm> */}
        <PopupWithForm
          name="card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__inputs">
            <label className="form__field">
              <input
                id="card-name-input"
                className="form__item form__item_el_card-name" 
                name="card-name"
                type="text" 
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="card-name-input-error form__item-error"></span>
            </label>
            <label className="form__field">
              <input
                id="link-input"
                className="form__item form__item_el_card-link" 
                name="card-link"
                type="url" 
                placeholder="Ссылка на картинку"
                required
              />
              <span className="link-input-error form__item-error"></span>
            </label>
          </fieldset>                                    
        </PopupWithForm>
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
