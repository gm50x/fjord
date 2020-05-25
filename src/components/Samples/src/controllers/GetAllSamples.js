/**
 * Dependent on service which is dependent on repository. 
 * 
 * Dep. Tree: Controller > Service > Repository
 */

const BaseController = require('../../../../core/base/BaseController')
module.exports = class GetAllSamples extends BaseController {
    constructor(di) {
        super(di)
    }

    activate = async (req, res) => {
        const samples = await this.service.getAllSamples()
        return res.status(200).json(samples)
    }
}