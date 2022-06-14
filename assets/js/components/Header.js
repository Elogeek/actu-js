class Header {

    /**
     * Constructor
     */
    constructor() {
        this.logo = document.createElement("img");

    }

    /**
     * Init title
     * @param divContainer
     */
    init(divContainer) {
        this.logo.src = "/build/img/logo.png";
        this.logo.className = "Header";
        this.logo.style.maxWidth = "12%";
        this.logo.style.margin = "2rem";


        divContainer.appendChild(this.logo);
    }
}

export {Header};