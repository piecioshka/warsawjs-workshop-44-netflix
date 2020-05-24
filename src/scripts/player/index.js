import { PlayerCore } from './core/index.js';
import { PlayerGui } from './gui/index.js';
import { DefaultTheme } from './gui/themes/default.js';

export class Player {
    constructor() {
        this.core = new PlayerCore();
        this.gui = new PlayerGui();
    }

    setup($target) {
        this.gui.addListener('click:play', () => {
            this.core.play();
        });

        this.gui.build(DefaultTheme, $target);
    }
}
