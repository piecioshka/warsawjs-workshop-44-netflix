import { VideoReadonlyFactory } from '../videos/video-readonly-factory.js';
import { strategies } from './manager.js';

strategies.set(
    'default',
    (film) => VideoReadonlyFactory.create(film)
);
