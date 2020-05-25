module.exports = class BaseController {
    constructor(di = { service }) {
        this.service = di.service
    }

    activate = async (req, res) => {
        await Promise.reject(new Error('Method not implemented'))
    }
}