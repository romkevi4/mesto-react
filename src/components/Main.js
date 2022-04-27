export default function Main() {
    return (
        /*=============================== Main ===============================*/
        <main className="main">
            {/*---------- Profile ----------*/}
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
                    </div>
                </div>
                <button aria-label="Добавить" type="button" className="profile__add-button"></button>
            </section>


            {/*---------- Elements ----------*/}
            <section className="elements"></section>
        </main>
    );
}