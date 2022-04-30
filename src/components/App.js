import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';


export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick  = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    const handleCardClick = (cardObject) => {
        setSelectedCard(cardObject);
    }

    return (
        <div className="App">
            <div className="page">
                {/*=============================== Components ===============================*/}
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>


                {/*---------- Popup edit profile ----------*/}
                <PopupWithForm
                    title="Редактировать профиль"
                    name="editProfile"
                    btnText="Сохранить"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        type="text"
                        minLength="2"
                        maxLength="40"
                        autoComplete="off"
                        name="name"
                        placeholder="Имя пользователя"
                        value=""
                        required
                        className="popup__item"
                        id="popupName"
                    />
                    <span className="popup__item-error popupName-error"/>

                    <input
                        type="text"
                        minLength="2"
                        maxLength="200"
                        autoComplete="off"
                        name="about"
                        placeholder="О себе"
                        value=""
                        required
                        className="popup__item"
                        id="popupAboutMe"
                    />
                    <span className="popup__item-error popupAboutMe-error"/>
                </PopupWithForm>


                {/*---------- Popup add card ----------*/}
                <PopupWithForm
                    title="Новое место"
                    name="addCard"
                    btnText="Создать"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        type="text"
                        minLength="2"
                        maxLength="30"
                        autoComplete="off"
                        name="title"
                        placeholder="Название"
                        value=""
                        required
                        className="popup__item"
                        id="popupTitle"
                    />
                    <span className="popup__item-error popupTitle-error"/>

                    <input
                        type="url"
                        autoComplete="off"
                        name="link"
                        placeholder="Ссылка на картинку"
                        value=""
                        required
                        className="popup__item"
                        id="popupLink"
                    />
                    <span className="popup__item-error popupLink-error"/>
                </PopupWithForm>


                {/*---------- Popup delete card ----------*/}
                <PopupWithForm
                    title="Вы уверены?"
                    name="deleteCard"
                    btnText="Да"
                    onClose={closeAllPopups}
                />


                {/*---------- Popup edit avatar ----------*/}
                <PopupWithForm
                    title="Обновить аватар"
                    name="editAvatar"
                    btnText="Сохранить"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        type="url"
                        autoComplete="off"
                        name="avatar"
                        placeholder="Ссылка на аватар профиля"
                        value=""
                        required
                        className="popup__item"
                        id="popupLinkAvatar"
                    />
                    <span className="popup__item-error popupLinkAvatar-error"/>
                </PopupWithForm>


                {/*---------- Popup image ----------*/}
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </div>
        </div>
    );
}