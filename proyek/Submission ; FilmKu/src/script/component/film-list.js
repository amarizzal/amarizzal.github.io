class FilmList extends HTMLElement {
    set results (results) {
        this._results = results;
        this.render();
    } 

    render() {
        this.innerHTML = "";
        this._results.forEach(film => {
            const filmItemElement = document.createElement("film-item");
            filmItemElement.film = film;
            this.appendChild(filmItemElement);
        });
    }
}

customElements.define("film-list", FilmList);