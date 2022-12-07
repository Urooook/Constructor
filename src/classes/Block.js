import {row, col, css} from "../utils";

export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }
}


export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const { tag = 'h1', styles } = this.options; // В методе toHtml в каждом классе должны быть свои шаблоны
        return row(col(`<${tag}>${this.value}<${tag}/>`), css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const html = this.value.map(col).join('');
        return row(html, css(this.options.styles ?? {}))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml(){
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}