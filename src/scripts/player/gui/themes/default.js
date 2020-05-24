export class DefaultTheme {
    constructor() {
        this.$el = document.createElement('div');
    }
    createControls() {
        const $controls = document.createElement('div');
        $controls.classList.add('controls');
        this.$el.append($controls);
        return this;
    }
    createProgress() {
        // ...
        return this;
    }
    addButton() {
        // ...
        return this;
    }
    render() {
        return this.$el;
    }
}
