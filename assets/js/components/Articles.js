import $ from "jquery";
import {Article} from "./Article";
import { loremIpsum } from "lorem-ipsum";

class Articles {

    /**
     * Constructor
     */
    constructor() {
        this.expanded = false;
        this.scrollY = 0;
        this.divArticles = document.createElement("div");
        this.check = true;
    }

    /**
     * Init the divContainer
     * @param divContainer
     */
    init(divContainer) {
        divContainer.appendChild(this.divArticles);
        this.divArticles.style.cssText = "width: 100%";
        this.divArticles.id = "divArticles"
        $.ajax({
            url: 'http://api.mediastack.com/v1/news',
            data: {
                access_key: '6e6daf070179498ad3531d057e9946b0',
                languages: 'fr,-en',
                countries: 'fr,jp',
                limit: 20,
                offset: 20,
            }
        })
            .done(data => {
                let dataArticles = data.data;
                dataArticles.sort(function compare(dataA, dataB) {
                    if (dataA.published_at < dataB.published_at)
                        return -1;
                    if (dataA.published_at > dataB.published_at )
                        return 1;
                    return 0;
                }).reverse();

                dataArticles.forEach(function (event) {
                    let article = new Article();
                    article.init(event.title, event.description, event.author, event.published_at, event.image, event.source);
                })

                this.viewArticle();

            });
    }

    /**
     * Adaptation of the container for the display of an article
     */
    viewArticle() {
        let divArticle = document.querySelectorAll(".divArticle");
        let p = document.createElement("p");
        let width = divArticle[0].style.width;

        window.addEventListener('resize', function () {
            width = divArticle[0].style.width;
        }, false);

        p.style.cssText = "font-size: 2.8rem; padding: 4rem 3rem";

        p.innerHTML =
            loremIpsum({
                count: 5,
                paragraphLowerBound: 3,
                paragraphUpperBound: 7,
            });

        divArticle.forEach( e => e.addEventListener("click", () => this.animation(e, divArticle, p, width)));
    }

    /**
     * Manages the animation (appearance, deletion) when clicking on an article
     * @param event
     * @param divArticle
     * @param articleContent
     * @param width
     */
    animation(event, divArticle, articleContent, width) {
        if(this.check === true) {
            this.check = false;
            if(this.expanded === false) {
                this.scrollY = window.scrollY;
            }

            divArticle.forEach(function (displayArticle) {

                if(displayArticle !== event && displayArticle.className === "divArticle-show") {
                    displayArticle.animate(
                        [
                            {
                                opacity: 0,
                                easing: 'ease-in',
                            }
                        ],
                        {
                            duration: 500,
                            easing: "linear",
                            fill: "forwards",
                        }
                    )
                    setTimeout(function () {
                        displayArticle.style.display = "none";
                        displayArticle.className = "divArticle-hidden";
                    }, 500);
                }
                else if(displayArticle !== event) {
                    displayArticle.style.display = "flex";
                    displayArticle.className = "divArticle-show";
                    displayArticle.animate([
                            {
                                opacity: 1,
                                easing: 'ease-in',
                            }
                        ],
                        {
                            duration: 500,
                            easing: "linear",
                            fill: "forwards",
                        }
                    );
                }
                else {
                    if(window.matchMedia("(min-width: 700px)").matches) {
                        if(displayArticle.className === "divArticle-show") {
                            displayArticle.firstChild.childNodes[2].after(articleContent);
                            displayArticle.animate([
                                    {
                                        width: "90%",
                                        easing: 'ease-in',
                                    }
                                ],
                                {
                                    duration: 500,
                                    easing: "linear",
                                    fill: "forwards",
                                }
                            );
                            displayArticle.className = "divArticle-show-view";
                        }
                        else {
                            displayArticle.firstChild.childNodes[3].remove();
                            displayArticle.animate([
                                    {
                                        width: width,
                                        easing: 'ease-in',
                                    }
                                ],
                                {
                                    duration: 500,
                                    easing: "linear",
                                    fill: "forwards",
                                }
                            );
                            displayArticle.className = "divArticle-show";
                        }

                    }
                    else {
                        if(displayArticle.className === "divArticle-show") {
                            displayArticle.firstChild.childNodes[2].after(articleContent);
                            displayArticle.className = "divArticle-show-view";
                        }
                        else {
                            displayArticle.firstChild.childNodes[3].remove();
                            displayArticle.className = "divArticle-show";
                        }
                    }
                }
            });

            if (this.expanded) {
                this.expanded = false;
                window.scrollTo(0, this.scrollY);
                this.scrollY = 0;
            }
            else {
                this.expanded = true;
            }

            setTimeout(() => this.check = true, 600);
        }
    }
}

export {Articles};