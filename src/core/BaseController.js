module.exports = class BaseController {
    constructor({ service }) {
        this.service = service
    }

    activate() {
        throw new Error('Method not implemented')
    }
}