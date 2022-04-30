import React, { useState, useEffect } from "react";
import { api } from '../utils/api';
import Card from "./Card";


export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('name');
    const [userDescription, setUserDescription] = useState('about');
    const [userAvatar, setUserAvatar] = useState('avatarUrl');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);

                setCards(cardsData);
            })
            .catch(err => {
                console.error(`Ошибка: ${err}`);
            });
    }, []);

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
                            src={userAvatar}
                            alt="Аватар"
                            className="profile__avatar"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__box">
                            <h1 className="profile__name">{userName}</h1>
                            <button
                                aria-label="Редактировать"
                                type="button"
                                onClick={onEditProfile}
                                className="profile__edit-button"
                            >
                            </button>
                        </div>
                        <p className="profile__about-me">{userDescription}</p>
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
                            <Card card={card} onCardClick={onCardClick} key={card._id}/>
                        );
                    })
                }
            </section>
        </main>
    );
}