
class Theme {

    /**
     * Constructor
     */
    constructor() {
        this.button = document.createElement("i");
        this.button.className = 'bx bx-palette';
    }

    /**
     * Init the button mode
     * @param divContainer
     */
    init(divContainer) {
        this.button.style.cssText = "" +
            "position: absolute; " +
            "top: 2rem; right: 2rem;" +
            " width: 33px; " +
            "height: 33px; " +
            "background-color: black; " +
            "color: white; " +
            "text-align: center; " +
            "cursor: pointer; " +
            "border-radius: 2rem;" +
        "";

        divContainer.appendChild(this.button);


        if(localStorage.getItem("theme")) {
            if(localStorage.getItem("theme") === "light") {
                document.body.style.cssText = "font-size: 3rem; background-color: white; color: #494949FF"
                this.button.style.cssText =
                    "position: absolute; " +
                    "top: 2rem; " +
                    "right: 2rem; " +
                    "width: 33px; " +
                    "height: 33px; " +
                    "background-color: black; " +
                    "color: white; " +
                    "text-align: center; " +
                    "cursor: pointer; " +
                    "border-radius: 2rem;" +
                "";
            }
            else {
                document.body.style.cssText = "font-size: 3rem; background-color: black; color: #FAFAFAFF";
                this.button.style.cssText =
                    "position: absolute; " +
                    "top: 2rem; " +
                    "right: 2rem; " +
                    "width: 33px; " +
                    "height: 33px; " +
                    "background-color: white; " +
                    "color: black; " +
                    "cursor: pointer; " +
                    "border-radius: 2rem; " +
                    "text-align: center;" +
                "";

            }
        }
    }

    /**
     * Adapt the css with a click
     */
    choiceMode() {
        this.button.addEventListener("click", () => {
            if(localStorage.getItem("theme")) {
                /** Theme night **/
                if(localStorage.getItem("theme") === "light") {
                    document.body.style.cssText = "font-size: 3rem; background-color: black; color: white";
                    this.button.style.cssText =
                        "position: absolute; " +
                        "top: 2rem; " +
                        "right: 2rem; " +
                        "width: 33px; " +
                        "height: 33px; " +
                        "background-color: white; " +
                        "color: black; " +
                        "text-align: center; " +
                        "cursor: pointer; " +
                        "border-radius: 2rem;" +
                    "";
                    localStorage.setItem("theme", "dark");
                }
                /** Theme light **/
                else {
                    document.body.style.cssText = "font-size: 3rem; background-color: white; color: black";
                    this.button.style.cssText =
                        "position: absolute; " +
                        "top: 2rem; " +
                        "right: 2rem; " +
                        "width: 33px; " +
                        "height: 33px; " +
                        "background-color: black; " +
                        "color: white; " +
                        "text-align: center; " +
                        "cursor: pointer; " +
                        "border-radius: 2rem;" +
                    "";
                    localStorage.setItem("theme", "light");
                }
            }

            else {
                localStorage.setItem("theme", "dark");
                document.body.style.cssText = "font-size: 3rem; background-color: black; color: white";
                this.button.style.cssText =
                    "position: absolute; " +
                    "top: 2rem; " +
                    "right: 2rem; " +
                    "width: 33px; " +
                    "height: 33px; " +
                    "background-color: white; " +
                    "color: black; " +
                    "text-align: center; " +
                    "cursor: pointer; " +
                    "border-radius: 2rem;" +
                "";
            }
        })
    }
}

export {Theme};

