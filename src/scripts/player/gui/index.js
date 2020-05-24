import { EventEmitter } from '../../utils/event-emitter.js';

export class PlayerGui extends EventEmitter {
    build(Theme, $target) {
        new Theme()
            .createControls()
            .createProgress()
            .addButton('play', '▶️', () => {
                this.triggerEvent('click:play');
            })
            .addButton('stop', '⏹', () => {
                this.triggerEvent('click:stop');
            })
            .render($target);
    }
}
