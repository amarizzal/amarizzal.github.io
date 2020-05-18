class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="search-bar">
            <input placeholder="Cari Film Favoritmu Disini" type="search" id="kotak_cari">
            <button type="submit" id="tombol_cari">Cari</button>
        </div>
        `;

        this.querySelector("#tombol_cari").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", Search);