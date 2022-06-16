import {Header} from "./Header";
import {Footer} from "./Footer";
import {Articles} from "./Articles";
import {ButtonMode} from "./ButtonTheme";
import {logPlugin} from "@babel/preset-env/lib/debug";

class Container {

    /**
     * Constructor
     */
    constructor() {
        this.divContainer = document.createElement("div");
        this.header = new Header();
        this.footer = new Footer();
        this.article = new Articles();
        this.button = new ButtonMode();
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
        this.button.click();

    }
}

export {Container};