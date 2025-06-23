export class Article {
    constructor({ id, title, urlToImage, tags, ...rest }) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }

    //Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy card';
        article.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

        if(this.title || this.tags) {
            template += `<div class="strategy__content">`

            this.title &&
            (template += `<h3 class="strategy__header reset-header">${this.title}</h3>`);

            if(this.tags) {
                template += `<div class="strategy__tags strategies__tags--attached">`

                this.tags.map(tag => {
                    template += `<span class="tag tag--attached" href="#">${tag}</span>`
                })

                template += `</div>`
            }

            template += `</div>`
        }

        article.innerHTML = template;
        console.log(article);
        return article;
    }
}