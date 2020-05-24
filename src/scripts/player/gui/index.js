import { EventEmitter } from '../../utils/event-emitter.js';

export class PlayerGui extends EventEmitter {
    build(Theme, $target) {
        new Theme()
            .createControls()
            .createProgress()
            .addButton('play', 'Play', () => {

            })
            .addButton('stop', 'Stop', () => {

            })
            .render($target);
    }
}
