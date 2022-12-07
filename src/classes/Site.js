export class Site {
    constructor(elem) {
        this.elem = document.querySelector(elem);
    }

    render(model) {
        this.elem.innerHTML = '';
        model.forEach(block => {
            this.elem.insertAdjacentHTML('beforeend', block.toHtml())
        })
    }
}