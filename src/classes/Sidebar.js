import {block} from "../utils";
import {TextBlock, TitleBlock} from "./Block";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.el = document.querySelector(selector);
        this.update = updateCallback;
        this.init();
    }

    init() {
      this.el.insertAdjacentHTML('afterbegin', this.templates);
      this.el.addEventListener('submit', this.add.bind(this));
    }

    get templates() { // Шаблон
        return [
            block('text'),
            block('title')
        ].join('')
    }

    add(e) { // Тут наверное можно EventEmmiter нормально заюзать
        e.preventDefault();

        let newBlock;
        const type = e.target.name;
        const value = e.target.value.value;
        const styles = e.target.styles.value;

        switch (type){
            case 'text': {
                newBlock = new TextBlock(value, {
                    styles
                });
                break;
            }
            case 'title': {
                newBlock = new TitleBlock(value, {styles});
                break;
            }
            default: {
                break;
            }
        }
        this.update(newBlock)

        e.target.value.value = '';
        e.target.styles.value = '';

    }
}