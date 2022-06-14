import '@fortawesome/fontawesome-free/js/all.js';

class ButtonMode {

    /**
     * Constructor
     */
    constructor() {
        this.button = document.createElement("div");
        this.mode = document.createElement("button");
    }

    /**
     * Init the button mode
     * @param divContainer
     */
    init(divContainer) {
        this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem; text-align: center;";
        this.mode.className = "themeBtn";
        this.mode.innerHTML = "<i class=\"fas fa-sun\" style='color: #494949;'></i>";
        divContainer.appendChild(this.button);
        this.button.appendChild(this.mode);

        if(localStorage.getItem("theme")) {
            if(localStorage.getItem("theme") === "light") {
                document.body.style.cssText = "font-size: 3rem; background-color: white; color: #494949FF"
                this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem;";

            }
            else {
                document.body.style.cssText = "font-size: 3rem; background-color: #494949FF; color: #FAFAFAFF";
                this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: #FAFAFAFF; cursor: pointer; border-radius: 2rem;";
            }
        }
    }

    /**
     * Adapt the css with a click
     */
    click() {
        this.button.addEventListener("click", () => {
            console.log("ok");
            if(localStorage.getItem("theme")) {
                if(localStorage.getItem("theme") === "light") {
                    document.body.style.cssText = "font-size: 3rem; background-color: #494949FF; color: #FAFAFAFF";
                    this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: #FAFAFAFF; cursor: pointer; border-radius: 2rem;";
                    localStorage.setItem("theme", "dark");
                }
                else {
                    document.body.style.cssText = "font-size: 3rem; background-color: #FAFAFAFF; color: #494949FF";
                    this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem;";
                    localStorage.setItem("theme", "light");
                }
            }
            else {
                document.body.style.cssText = "font-size: 3rem; background-color: #494949FF; color: #FAFAFAFF"
                localStorage.setItem("theme", "dark");
                this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: #FAFAFAFF; cursor: pointer; border-radius: 2rem;";
            }
        })
    }
}

export {ButtonMode};