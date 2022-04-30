import React from 'react';


export default function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
            <button onClick={handleClick} aria-label="Картинка" type="button" className="element__image-button">
                <img src={card.link} alt={card.name} className="element__image"/>
            </button>
            <div className="element__box">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-info">
                    <button aria-label="Лайк" type="button" className="element__like-button"/>
                    <span name="likes" className="element__like-number">{card.likes.length}</span>
                </div>
            </div>
        </article>
    );
}