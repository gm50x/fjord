const data = require('./MockData.json')

module.exports = class MockData {
    constructor() {
        this.data = data
    }
    find(fn) { return data.find(fn) }
}