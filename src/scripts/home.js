import { strategies } from './strategies/manager.js';
import { VideoGenerator } from './videos/video-generator.js';

import './strategies/paid-strategy.js';
import './strategies/playable-strategy.js';
import './strategies/default.js';

function main() {
    console.log('home page');

    const $target = document.querySelector('.video-list-container');
    VideoGenerator.generate(strategies, $target);
}

main();
