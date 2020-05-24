import { PlayerCore } from './core/index.js';
import { PlayerGui } from './gui/index.js';
import { DefaultTheme } from './gui/themes/default.js';

export class Player {
    constructor($target) {
        this.$target = $target;
        const $video = $target.querySelector('video');
        this.core = new PlayerCore($video);
        this.gui = new PlayerGui();
    }

    setup() {
        this.gui.addListener('click:play', () => {
            this.core.play();
        });
        this.gui.addListener('click:stop', () => {
            this.core.stop();
        });

        this.gui.build(DefaultTheme, this.$target);
    }
}
