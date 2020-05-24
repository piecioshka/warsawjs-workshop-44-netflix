export class EventEmitter {
    constructor() {
        this._listeners = {};
    }
    addListener(name, cb) {
        this._listeners[name] = this._listeners[name] || [];
        this._listeners[name].push(cb);
    }
    triggerEvent(name, payload) {
        (this._listeners[name] || []).forEach((cb) => cb(payload));
    }
}
