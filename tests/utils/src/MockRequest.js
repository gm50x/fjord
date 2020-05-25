module.exports = class MockResponse {
    constructor(di = { headers: {}, params: {}, query: {}, body: {} }) {
        this.headers = di.headers
        this.params = di.params
        this.query = di.query
        this.body = di.body
    }
}