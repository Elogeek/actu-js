import $ from "jquery";
import {Article} from "./Article.mjs";
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
                keyword: 'Japan',
                limit: 20,
                offset: 20,
            }
        })
            .done(data => {
                let dataArticles = data.data;
                dataArticles.sort(function compare(dataA, dataX) {
                    if (dataA.published_at < dataX.published_at)
                        return -1;
                    if (dataA.published_at > dataX.published_at )
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
     * Content adaptation of the article
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

            myArticle.forEach(function (dataX) {

                if(dataX !== event && dataX.className === "article") {
                   dataX.animate(
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
                        dataX.style.display = "none";
                        dataX.className = "article_hidden";
                    }, 500);
                }
                else if(dataX !== event) {
                    dataX.style.display = "flex";
                    dataX.className = "article";
                    dataX.animate([
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
                        if(dataX.className === "article") {
                           dataX.firstChild.childNodes[2].after(contentArticle);
                            dataX.animate([
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
                            dataX.className = "article_show";
                        }
                        else {
                            dataX.firstChild.childNodes[3].remove();
                            dataX.animate([
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
                            dataX.className = "article";
                        }

                    }
                    else {
                        if(dataX.className === "article") {
                            dataX.firstChild.childNodes[2].after(contentArticle);
                            dataX.className = "article";
                        }
                        else {
                            dataX.firstChild.childNodes[3].remove();
                            dataX.className = "article";
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
