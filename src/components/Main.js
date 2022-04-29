import React, { useState } from "react";

export default function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();

    return (
        /*=============================== Main ===============================*/
        <main className="main">
            {/*---------- Profile ----------*/}
            <section className="profile">
                <div className="profile__card">
                    <button
                        aria-label="Аватар"
                        type="button"
                        onClick={handleEditAvatarClick}
                        className="profile__avatar-btn"
                    >
                        <img
                            alt="Аватар"
                            className="profile__avatar"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__box">
                            <h1 className="profile__name"/>
                            <button
                                aria-label="Редактировать"
                                type="button"
                                onClick={handleEditProfileClick}
                                className="profile__edit-button"
                            >
                            </button>
                        </div>
                        <p className="profile__about-me"/>
                    </div>
                </div>
                <button
                    aria-label="Добавить"
                    type="button"
                    onClick={handleAddPlaceClick}
                    className="profile__add-button"
                >
                </button>
            </section>


            {/*---------- Elements ----------*/}
            <section className="elements"/>
        </main>
    );
}