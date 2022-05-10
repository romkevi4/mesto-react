import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="editProfile"
            btnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
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
    );
}