/**
 * Dependent on service which is dependent on repository. 
 * 
 * Dep. Tree: Controller > Service > Repository
 */

const BaseController = require('../../../core/BaseController')
module.exports = class GetSampleById extends BaseController {
    constructor(di) {
        super(di)
    }

    activate = (req, res) => {
        const id = Number(req.params.id)
        if (!id && id !== 0) {
            throw new Error('Validation Error: provided id is not valid')
        }

        const sample = this.service.getSampleById(Number(id))

        return res.status(200).json(sample)
    }
}