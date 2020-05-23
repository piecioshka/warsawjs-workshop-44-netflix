import { EventEmitter } from '../../utils/event-emitter.js';

export class PlayerGui extends EventEmitter {
    build(Theme, $target) {
        this.theme = new Theme();
        this.$el = this.theme
            .createControls()
            .createProgress()
            .addButton('play', 'Play', () => {
                this.triggerEvent('click:play');
            })
            .addButton('stop', 'Stop', () => {
                this.triggerEvent('click:stop');
            })
            .render($target);
    }
    setProgress(progress) {
        this.theme.setProgress(progress);
    }
}
