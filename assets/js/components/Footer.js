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
        this.footer.innerHTML = "By Elogeek";
        this.footer.style.cssText = " background: rgb(235,149,146);\n" +
            "background: linear-gradient(108deg, rgba(235,149,146,1) 15%, rgba(255,255,255,1) 96%); ; text-align: center; padding: 5rem 0; text-align: center; position: static; bottom: 0";

        divContainer.appendChild(this.footer);
    }
}
export {Footer};