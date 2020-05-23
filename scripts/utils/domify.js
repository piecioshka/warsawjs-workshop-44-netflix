export function domify(template) {
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .body.firstElementChild;
}
