class Header {

    /**
     * Constructor
     */
    constructor() {
        this.logo = document.createElement("img");
        this.logo.id = "logo";

    }

    /**
     * Init title
     * @param divContainer
     */
    init(divContainer) {
        this.logo.src = "/build/img/logo.png";
        this.logo.className = "Header";

        divContainer.appendChild(this.logo);
    }
}

export {Header};