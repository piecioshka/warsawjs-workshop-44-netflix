export function createDOMElementFromString(template) {
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .body.firstElementChild;
}
