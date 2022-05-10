import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function EditAvatarPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="editAvatar"
            btnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
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
    );
}