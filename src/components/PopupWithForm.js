export default function PopupWithForm({ title, name, btnText, isOpen, onClose, children }) {
    return (
        /*=============================== Popup with form ===============================*/
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id={`popup-${name}`}>
            <div className="popup__container">
                <button onClick={onClose} aria-label="Закрыть" type="button" className="popup__close-button"/>
                <form method="post" name={name} className="popup__form" noValidate>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button aria-label={btnText} type="submit" className="popup__save-button">{btnText}</button>
                </form>
            </div>
        </div>
    );
}