import { domify } from '../utils/domify.js';

export class VideoPlayable {
    static template({ thumb, title }) {
        return `
            <div class="card mb-3">
                <a href="film.html">
                    <img
                        src="${thumb}"
                        class="card-img-top"
                        alt=""
                    />
                </a>
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="film.html">
                            ${title}
                        </a>
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
