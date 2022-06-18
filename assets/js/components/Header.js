class Header {

    /**
     * Constructor
     */
    constructor() {
        this.divLogo = document.createElement("div");
        this.divLogo.id = "divLogo";
        this.logo = document.createElement("img");
        this.logo.id = "logo";

    }

    /**
     * Init title
     * @param divContainer
     */
    init(divContainer) {
        this.logo.src = "/build/img/logo.png";

        /** design img **/
        this.logo.style.cssText = "max-width: 12%; margin: 2rem;";
        this.divLogo.style.cssText = "width: 100%; text-align: center; padding: 2rem 0; margin-top: 2rem";

        divContainer.appendChild(this.divLogo);
        this.divLogo.appendChild(this.logo)
    }
}

export {Header};