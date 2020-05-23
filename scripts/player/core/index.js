import { EventEmitter } from '../../utils/event-emitter.js';

const MAX_PERCENT_VALUE = 100;

export class PlayerCore extends EventEmitter {
    constructor($video) {
        super();
        this.$video = $video;
        this.$video.addEventListener('timeupdate', () => {
            const { currentTime, duration } = this.$video;
            const progress = currentTime / duration * MAX_PERCENT_VALUE;
            this.triggerEvent('update:progress', { progress });
        });
    }
    play() {
        this.$video.play();
    }
    stop() {
        this.$video.pause();
        this.$video.currentTime = 0;
    }
}
