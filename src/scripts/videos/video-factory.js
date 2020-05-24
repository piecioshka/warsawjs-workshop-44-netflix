import { createDOMElementFromString } from '../utils/create-dom-element-from-string.js';

export class VideoFactory {
    static template(_film) {
        return '';
    }
    static create(film) {
        const compiledTemplate = this.template(film);
        const $el = createDOMElementFromString(compiledTemplate);
        return $el;
    }
}
