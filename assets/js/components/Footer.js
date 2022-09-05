class Footer {

    /**
     * Constructor
     */
    constructor() {
        this.footer = document.createElement("div");
    }

    /**
     * Init the container
     * @param divContainer
     */
    init(divContainer) {
        this.footer.innerHTML = "© Copyright By Elogeek  ";
        this.footer.className = "Footer";
        divContainer.appendChild(this.footer);
    }
}
export {Footer};
