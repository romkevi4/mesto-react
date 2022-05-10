import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function AddPlacePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title="Новое место"
            name="addCard"
            btnText="Создать"
            isOpen={isOpen}
            onClose={onClose}
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
    );
}