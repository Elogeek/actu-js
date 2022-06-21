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
     * Init the divContainer (divArticles)
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
                dataArticles.sort(function compare(dataA, dataY) {
                    if (dataA.published_at < dataY.published_at)
                        return -1;
                    if (dataA.published_at > dataY.published_at )
                        return 1;
                    return 0;
                }).reverse();

                dataArticles.forEach(function (event) {
                    let article = new Article();
                    article.init(event.title, event.description, event.author, event.published_at, event.image, event.source);
                })

                this.showArticle();

            });
    }

    /**
     * Adaptation of the container for the display of an article
     */
    showArticle() {
        let myArticle = document.querySelectorAll(".article");
        let contentArticle = document.createElement("p");
        let width = myArticle[0].style.width;

        window.addEventListener('resize', function () {
            width = myArticle[0].style.width;
        }, false);

        /** Design and content of the articles */
        contentArticle.style.cssText = "font-size: 2.8rem; padding: 4rem 3rem";
        contentArticle.innerHTML =
            loremIpsum({
                count: 5,
                paragraphLowerBound: 3,
                paragraphUpperBound: 7,
            });

        myArticle.forEach( event => event.addEventListener("click", () => this.startDisplayArticle(event, myArticle, contentArticle, width)));
    }

    /**
     * Manages the animation (appearance, deletion) when clicking on an article
     * @param event
     * @param myArticle
     * @param contentArticle
     * @param width
     */
    startDisplayArticle(event, myArticle, contentArticle, width) {
        if(this.check === true) {
            this.check = false;
            if(this.expanded === false) {
                this.scrollY = window.scrollY;
            }

            myArticle.forEach(function (x) {

                if(x !== event && x.className === "article_show") {
                   x.animate(
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
                        x.style.display = "none";
                        x.className = "article_hidden";
                    }, 500);
                }
                else if(x !== event) {
                    x.style.display = "flex";
                    x.className = "article_show";
                    x.animate([
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
                        if(x.className === "article_show") {
                           x.firstChild.childNodes[2].after(contentArticle);
                            x.animate([
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
                            x.className = "article_show_single";
                        }
                        else {
                            x.firstChild.childNodes[3].remove();
                            x.animate([
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
                            x.className = "article_show";
                        }

                    }
                    else {
                        if(x.className === "article_show") {
                            x.firstChild.childNodes[2].after(contentArticle);
                            x.className = "article_show_single";
                        }
                        else {
                            x.firstChild.childNodes[3].remove();
                            x.className = "article_show";
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