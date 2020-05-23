import { VideosGenerator } from './videos-generator.js';

export class VideosGeneratorProxy {
    static generate($target, size) {
        while ($target.firstChild) {
            $target.firstChild.remove();
        }

        return VideosGenerator.generate($target, size);
    }
}
