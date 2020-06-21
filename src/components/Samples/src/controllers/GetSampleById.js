const { BaseController } = require('../../../../core/base')
module.exports = class GetSampleById extends BaseController {
    constructor(di) {
        super(di)
    }

    activate = async (req, res) => {
        const id = Number(req.params.id)

        if (!id && id !== 0) {
            return Promise.reject(new Error('Validation Error: provided id is not valid'))
        }
        const sample = await this.service.getSampleById(id)
        return res.status(200).json(sample || {})
    }
}