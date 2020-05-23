import { domify } from '../utils/domify.js';

export class VideoNotPlayable {
    static template({ thumb, title }) {
        return `
            <div class="card mb-3">
                <img
                    src="${thumb}"
                    class="card-img-top"
                    alt=""
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${title}
                    </h5>
                </div>
            </div>
            `;
    }

    static create($target, film) {
        const $el = domify(this.template(film));
        $target.append($el);
    }
}
