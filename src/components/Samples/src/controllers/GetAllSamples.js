const { BaseController } = require('../../../../core/base')
module.exports = class GetAllSamples extends BaseController {
    constructor(di) {
        super(di)
    }

    activate = async (req, res) => {
        const samples = await this.service.getAllSamples()
        return res.status(200).json(samples)
    }
}