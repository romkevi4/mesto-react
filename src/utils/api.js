import { identificationData } from './initialData';


// =============================== Формирование класса для работы с API ===============================
class Api {
    constructor({ serverAddress, token, cohort }) {
        this._serverAddress = serverAddress;
        this._token = token;
        this._cohort = cohort;
        this._baseUrl = `${this._serverAddress}/v1/${this._cohort}`;
    }

    // Проверка ответа сервера
    _processResponseData(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    }

    // Запрос получения данных пользователя с сервера
    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._processResponseData);
    }

    // Запрос сохранения измененных данных пользователя
    saveUserData(objectWithUserData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: objectWithUserData.name,
                about: objectWithUserData.about
            })
        })
            .then(this._processResponseData);
    }

    // Запрос сохранения измененных аватара пользователя
    saveUserAvatar(avatarUrl) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarUrl
            })
        })
            .then(this._processResponseData);
    }

    // Запрос получения карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._processResponseData);
    }

    // Запрос сохранения новой карточки на сервере
    saveNewCard(objectWithCardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: objectWithCardData.name,
                link: objectWithCardData.link
            })
        })
            .then(this._processResponseData);
    }

    // Запрос удаления карточки с сервера
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(this._processResponseData);
    }

    // Запрос на постановку лайка карточки
    addLikeOfCard(cardId, user) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                likes: user
            })
        })
            .then(this._processResponseData);
    }

// Запрос на снятие лайка с карточки
    removeLikeOfCard(cardId, user) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                likes: user
            })
        })
            .then(this._processResponseData);
    }
}

// Запросы серверу
export const api = new Api(identificationData);