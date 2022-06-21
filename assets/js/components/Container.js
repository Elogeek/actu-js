import {Header} from "./Header";
import {Footer} from "./Footer";
import {Articles} from "./Articles";
import {Theme} from "./Theme";

class Container {

    /**
     * Constructor
     */
    constructor() {
        this.divContainer = document.createElement("div");
        this.header = new Header();
        this.footer = new Footer();
        this.article = new Articles();
        this.button = new Theme();
    }

    /**
     * Init the container
     */
    init() {
        document.body.appendChild(this.divContainer);

        this.header.init(this.divContainer);
        this.article.init(this.divContainer);
        this.footer.init(this.divContainer);
        this.button.init(this.divContainer);
        this.button.choiceMode();

    }
}

export {Container};