import { VideoFactory } from './video-factory.js';
import { VideoPlayable } from './video-playable.js';
import { VideoNotPlayable } from './video-not-playable.js';

export class VideosGenerator {

    static generate($target, size = 6) {
        const $fragment = document.createDocumentFragment();
        Array.from({ length: size }).forEach((_, id) => {
            const film = {
                playable: Math.random() > 0.5,
                title: 'Rocky',
                thumb: `https://picsum.photos/id/${id * 100}/300/150/`,
                qualities: {
                    Standard: 'videos/Big_Buck_Bunny_360_10s_1MB.mp4',
                    Pro: 'videos/SampleVideo_360x240_1mb.mp4',
                }
            };

            const video = VideoFactory.create(film);

            if (film.playable) {
                VideoPlayable.create($fragment, video);
            } else {
                VideoNotPlayable.create($fragment, video);
            }
        });

        $target.append($fragment);
    }

}
