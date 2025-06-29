import { Modal } from './Modal.js';

export class ArticleModal extends Modal {
    constructor (classes, { id, title, urlToImage, tags, content, date}) {
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        this.content = content;
        this.date = date;
    }

    //Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'article-modal__content';

        this.urlToImage &&
        (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

        if(this.title || this.tags || this.content || this.date) {
            template += `<div class="strategy__content">`

            this.date &&
            (template += `<p class="strategy__date">${this.date}</p>`);

            this.title &&
            (template += `<h3 class="strategy__header reset-header">${this.title}</h3>`);

            this.content &&
            (template += `<p class="strategy__content">${this.content}</h3>`);            

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
        return article;
    }
}