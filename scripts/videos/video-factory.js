class Video {
    constructor(title, thumb, qualities) {
        this.title = title;
        this.thumb = thumb;
        this.qualities = qualities;
        this.selectedQuality = null;
    }
    selectQuality(quality) {
        this.selectedQuality = quality;
    }
}

export class VideoFactory {
    static create({ title, thumb, qualities }) {
        return new Video(title, thumb, qualities);
    }
}
