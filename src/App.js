import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="page">
        {/*=============================== Header ===============================*/}
        <header className="header">
          <img
              src=""
              alt="Изображен логотип Mesto"
              className="header__logo"
          />
        </header>

        <main className="main">
          {/*=============================== Profile ===============================*/}
          <section className="profile">
            <div className="profile__card">
              <button aria-label="Аватар" type="button" className="profile__avatar-btn">
                <img
                    alt="Аватар"
                    className="profile__avatar"
                />
              </button>
              <div className="profile__info">
                <div className="profile__box">
                  <h1 className="profile__name"></h1>
                  <button aria-label="Редактировать" type="button" className="profile__edit-button"></button>
                </div>
                <p className="profile__about-me"></p>
              </div> {/* .profile__info */}
            </div>  {/* .profile__card */}
            <button aria-label="Добавить" type="button" className="profile__add-button"></button>
          </section>


          {/*=============================== Elements ===============================*/}
          <section className="elements"></section>
        </main>


        {/*=============================== Footer ===============================*/}
        <footer className="footer">
          <address className="footer__copyright">&COPY; 2022 Mesto Russia</address>
        </footer>


        {/*=============================== Popup edit profile ===============================*/}
        <div className="popup" id="popup-edit-profile">
          <div className="popup__container">
            <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
            <form method="post" name="editingProfile" className="popup__form" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>

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
              <span className="popup__item-error popupName-error"></span>

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
              <span className="popup__item-error popupAboutMe-error"></span>

              <button aria-label="Сохранить" type="submit" className="popup__save-button">Сохранить</button>
            </form>
          </div> {/* .popup__container */}
        </div> {/* .popup */}


        {/*=============================== Popup add card ===============================*/}
        <div className="popup" id="popup-add-card">
          <div className="popup__container">
            <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
            <form method="post" name="addPlace" className="popup__form" noValidate>
              <h2 className="popup__title">Новое место</h2>

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
              <span className="popup__item-error popupTitle-error"></span>

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
              <span className="popup__item-error popupLink-error"></span>

              <button aria-label="Создать" type="submit" className="popup__save-button">Создать</button>
            </form>
          </div> {/* .popup__container */}
        </div> {/* .popup */}


        {/*=============================== Popup image ===============================*/}
        <div className="popup popup_opacity" id="popup-image">
          <div className="popup__container popup__container_size_big">
            <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
            <img alt="" className="popup__image"/>
              <p className="popup__text"></p>
          </div> {/* .popup__container */}
        </div> {/* .popup */}


        {/*=============================== Popup delete card ===============================*/}
        <div className="popup" id="popup-delete-card">
          <div className="popup__container">
            <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
            <form method="post" name="deleteCard" className="popup__form" noValidate>
              <h2 className="popup__title popup__title_margin_bottom">Вы уверены?</h2>
              <button aria-label="Подтверждение удаления" type="submit" className="popup__save-button">Да</button>
            </form>
          </div> {/* .popup__container */}
        </div> {/* .popup */}


        {/*=============================== Popup edit avatar ===============================*/}
        <div className="popup" id="popup-edit-avatar">
          <div className="popup__container">
            <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
            <form method="post" name="editAvatar" className="popup__form" noValidate>
              <h2 className="popup__title">Обновить аватар</h2>
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
                <span className="popup__item-error popupLinkAvatar-error"></span>

                <button aria-label="Сохранить" type="submit" className="popup__save-button">Сохранить</button>
            </form>
          </div> {/* .popup__container */}
        </div> {/* .popup */}


        {/*=============================== Template element ===============================*/}
        <template id="elements">
          <article className="element">
            <button aria-label="Картинка" type="button" className="element__image-button">
              <img alt="" className="element__image"/>
            </button>
            <div className="element__box">
              <h2 className="element__title"></h2>
              <div className="element__like-info">
                <button aria-label="Лайк" type="button" className="element__like-button"></button>
                <span name="likes" className="element__like-number">0</span>
              </div>
            </div>
          </article>
        </template>
      </div> {/* .page */}
    </div>  /* .App */
  );
}
