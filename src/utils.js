export const row = (data, styles) => `<div className="row" style="${styles}">${data}</div>`;

export const col = (data) => `<div className="col-sm">${data}</div>`

export const css = (styles = {}) => {
    if(typeof styles === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';');
}

export const block = (type) => {
    return `
<form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
        <input
            type="text"
            class="form-control form-control-sm"
            name="value"
            placeholder="value"
         >
    </div>
     <div class="form-group">
        <input
            type="text"
            class="form-control form-control-sm"
            name="styles"
            placeholder="styles"
         >
    </div>
    <button
     type="submit"
     class="btn-primary btn -btn-sm"
    >
    Добавить
    </button>
</form>
`
}