module.exports = class BaseController {
    constructor({ service }) {
        this.service = service
    }

    activate = async (req, res) => {
        await Promise.reject(new Error('Method not implemented'))
    }
}