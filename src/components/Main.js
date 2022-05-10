import React, { useState, useEffect, useContext } from 'react';

import { api } from '../utils/api';

import Card from './Card';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const currentUser = useContext(CurrentUserContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then(res => {
                setCards(res);
            })
            .catch(err => {
                console.error(`Ошибка: ${err}`);
            });
    }, []);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(err => {
                console.error(`Ошибка: ${err}`);
            });
    }

    function handleCardDelete() {
        api.changeDeleteCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(err => {
                console.error(`Ошибка: ${err}`);
            });
    }

    return (
        /*=============================== Main ===============================*/
        <main className="main">
            {/*---------- Profile ----------*/}
            <section className="profile">
                <div className="profile__card">
                    <button
                        aria-label="Аватар"
                        type="button"
                        onClick={onEditAvatar}
                        className="profile__avatar-btn"
                    >
                        <img
                            src={currentUser.avatar}
                            alt="Аватар"
                            className="profile__avatar"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__box">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button
                                aria-label="Редактировать"
                                type="button"
                                onClick={onEditProfile}
                                className="profile__edit-button"
                            >
                            </button>
                        </div>
                        <p className="profile__about-me">{currentUser.about}</p>
                    </div>
                </div>
                <button
                    aria-label="Добавить"
                    type="button"
                    onClick={onAddPlace}
                    className="profile__add-button"
                >
                </button>
            </section>


            {/*---------- Elements ----------*/}
            <section className="elements">
                {
                    cards.map((card) => {
                        return (
                            <Card
                                card={card}
                                onCardClick={onCardClick}
                                onCardLike={handleCardLike}
                                onCardDelete={handleCardDelete}
                                key={card._id}
                            />
                        );
                    })
                }
            </section>
        </main>
    );
}