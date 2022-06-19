import '@fortawesome/fontawesome-free/js/all.js';

class ButtonMode {

    /**
     * Constructor
     */
    constructor() {
        this.button = document.createElement("div");
        this.mode = document.createElement("i");
    }

    /**
     * Init the button mode
     * @param divContainer
     */
    init(divContainer) {
        this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem; text-align: center;";
        this.mode.innerHTML = "<i class=\"fa-solid fa-palette\"></i>";
        this.mode.style.color = "white";

        divContainer.appendChild(this.button);
        this.button.appendChild(this.mode);

        if(localStorage.getItem("theme")) {
            if(localStorage.getItem("theme") === "light") {
                document.body.style.cssText = "font-size: 3rem; background-color: white; color: #494949FF"
                this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem;";
                this.mode.style.cssText = "margin-top: 9px; display: flex; justify-content: center; align-items: center; align-content: center; color: white;";
            }
            else {
                document.body.style.cssText = "font-size: 3rem; background-color: black; color: #FAFAFAFF";
                this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: white; cursor: pointer; border-radius: 2rem;";
                this.mode.style.cssText = "margin-top: 9px; display: flex; justify-content: center; align-items: center; align-content: center; color: black;";
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
                /** Theme light **/
                if(localStorage.getItem("theme") === "light") {
                    document.body.style.cssText = "font-size: 3rem; background-color: white; color: black";
                    this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem;";
                    this.mode.style.cssText = "margin-top: 9px; display: flex; justify-content: center; align-items: center; align-content: center; color: white;";
                    localStorage.setItem("theme", "dark");
                }
                else {
                    document.body.style.cssText = "font-size: 3rem; background-color: white; color: #494949FF";
                    this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: black; cursor: pointer; border-radius: 2rem;";
                    localStorage.setItem("theme", "light");
                }
            }
            /** Theme night **/
            else {
                localStorage.setItem("theme", "dark");
                document.body.style.cssText = "font-size: 3rem; background-color: black; color: #FAFAFAFF";
                this.button.style.cssText = "position: absolute; top: 2rem; right: 2rem; width: 50px; height: 50px; background-color: white; cursor: pointer; border-radius: 2rem;";
                this.mode.style.cssText = "margin-top: 9px; display: flex; justify-content: center; align-items: center; align-content: center; color: black;";
            }
        })
    }
}

export {ButtonMode};

