module.exports = class MockRouter {
    constructor() {
    }

    get(url, fn) {
        this[url] = { get: fn }
    }

    post(url, fn) {
        this[url] = { post: fn }
    }

    put(url, fn) {
        this[url] = { put: fn }
    }

    delete(url, fn) {
        this[url] = { delete: fn }
    }

    head(url, fn) {
        this[url] = { head: fn }
    }
}