import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
		// document.querySelector('.popup_type_avatar').classList.add('popup_opened')
	}
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
		// document.querySelector('.popup_type_user').classList.add('popup_opened')
	}
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
		// document.querySelector('.popup_type_card').classList.add('popup_opened')
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
  }
  
  return (
    <div className="page__container">

      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
      />

      <Footer />

      <ImagePopup />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClosePopup={closeAllPopups}
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
      <PopupWithForm
        name="user"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClosePopup={closeAllPopups}
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
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClosePopup={closeAllPopups}
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
        // isOpen={}
        onClosePopup={closeAllPopups} />

      {/* <div className="popup popup_type_confirm">
        <div className="popup__container">
          <form className="form form_type_confirm">
            <h2 className="form__heading">Вы уверены?</h2>
            <fieldset className="form__handlers">
              <button className="form__button" type="submit">Да</button>
            </fieldset>
          </form>
          <button className="popup__close-btn"></button>
        </div>
      </div> */}
      

      {/* <div className="popup popup_type_avatar">
        <div className="popup__container">
          <form className="form form_type_avatar" name="avatar-form" noValidate>
            <h2 className="form__heading">Обновить аватар</h2>
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
            <fieldset className="form__handlers">
              <button className="form__button" type="submit">Сохранить</button>
            </fieldset>
          </form>
          <button className="popup__close-btn"></button>
        </div>
      </div> */}

      {/* <div className="popup popup_type_user">
        <div className="popup__container">
          <form className="form form_type_user" name="user-form" method="post" noValidate>
            <h2 className="form__heading">Редактировать профиль</h2>
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
            <fieldset className="form__handlers">
              <button className="form__button" type="submit">Сохранить</button>
            </fieldset>
          </form>
          <button className="popup__close-btn popup__close-btn_place_user" type="button"></button>
        </div>
      </div> */}

      {/* <div className="popup popup_type_card">
        <div className="popup__container">
          <form className="form form_type_card" name="card-form" method="post" noValidate>
            <h2 className="form__heading">Новое место</h2>
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
            <fieldset className="form__handlers">
              <button className="form__button" type="submit">Создать</button>
            </fieldset>
          </form>
          <button className="popup__close-btn popup__close-btn_place_card" type="button"></button>
        </div>
      </div> */}

      <template id="card-template">
        <article className="card">
          <img className="card__image" alt="" />
          <div className="card__group">
            <p className="card__description overflow-hidden"></p>
            <div className="like-group">
              <button className="like-group__icon" type="button"></button>
              <span className="like-group__count"></span>
            </div>
          </div>	
          <button className="card__delete-btn card__delete-btn_disabled" type="button"></button>
        </article>
      </template>

    </div>
  );
}

export default App;
