export default function ImagePopup() {
    return (
        /*=============================== Popup with image ===============================*/
        <div className="popup popup_opacity" id="popup-image">
            <div className="popup__container popup__container_size_big">
                <button aria-label="Закрыть" type="button" className="popup__close-button"/>
                <img alt="" className="popup__image"/>
                <p className="popup__text"/>
            </div>
        </div>
    );
}