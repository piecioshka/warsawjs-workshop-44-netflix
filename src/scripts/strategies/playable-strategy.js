import { VideoPlayableFactory } from '../videos/video-playable-factory.js';
import { strategies } from './manager.js';

strategies.set(
    (film) => film.playable,
    (film) => VideoPlayableFactory.create(film)
);
