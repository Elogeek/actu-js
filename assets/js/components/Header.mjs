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
        this.logo.style.cssText = "max-width: 17%; margin: 2rem;";
        this.divLogo.style.cssText = "width: 100%; text-align: center; padding: 2rem 0; margin-top: 2rem";

        divContainer.appendChild(this.divLogo);
        this.divLogo.appendChild(this.logo);

        this.mediaQuery();
    }

    /**
     * Add media query for img logo (mode responsive)
     */
    mediaQuery() {
        let div = this.logo;
        check();
        window.addEventListener('resize',check, false);

        function check() {
            if(window.matchMedia("(max-width: 460px)").matches) {
                return div.style.cssText =
                    "max-width: 25%";
            }
        }
    }
}

export {Header};
