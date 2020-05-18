class Bar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h2>Film Ku</h2>
        `;
    }
}

customElements.define("film-bar", Bar);