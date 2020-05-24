module.exports = class MockResponse {
    constructor({ headers, params, query, body }) {
        this.headers = headers || {}
        this.params = params || {}
        this.query = query || {}
        this.body = body || {}
    }
}