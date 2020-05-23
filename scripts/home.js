import { VideosGenerator } from './videos/videos-generator.js';
import { VideosGeneratorProxy } from './videos/videos-generator-proxy.js';

function main() {
    console.log('home page');
    const $target = document.querySelector('.video-list-container');

    VideosGenerator.generate($target, 3);
}

main();
