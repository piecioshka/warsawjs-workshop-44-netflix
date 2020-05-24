import { VideoPaidFactory } from '../videos/video-paid-factory.js';
import { strategies } from './manager.js';

strategies.set(
    (film) => film.isPaid,
    (film) => VideoPaidFactory.create(film)
);
