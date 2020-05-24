export class DefaultTheme {
    constructor() {
        this.$el = document.createElement('div');
    }
    createControls() {
        const $controls = document.createElement('div');
        $controls.classList.add('controls');
        this.$el.appendChild($controls);
        return this;
    }
    createProgress() {
        const $progress = document.createElement('div');
        $progress.classList.add('progress', 'mb-2', 'bg-white');

        const $bar = document.createElement('div');
        $bar.classList.add('progress-bar', 'bg-success');

        $progress.appendChild($bar);

        this.$el.appendChild($progress);
        return this;
    }
    addButton(name, label, cb) {
        const $button = document.createElement('button');
        $button.textContent = label;
        $button.classList.add('btn', 'btn-primary', 'mr-2', name);
        $button.addEventListener('click', cb);
        this.$el.appendChild($button);
        return this;
    }
    render($target) {
        $target.append(this.$el);
        return this.$el;
    }
}
