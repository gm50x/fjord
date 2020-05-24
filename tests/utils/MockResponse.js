module.exports = class MockResponse {
    constructor() { }

    status(statusCode) {
        this.statusCode = statusCode
        return this
    }

    json(obj) {
        this.obj = obj
        return this
    }
}