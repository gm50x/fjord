/**
 * Dependent on service which is dependent on repository. 
 * 
 * Dep. Tree: Controller > Service > Repository
 */

const BaseController = require('../../../core/BaseController')
module.exports = class GetAllSamples extends BaseController {
    constructor(di) {
        super(di)
    }

    activate = (req, res) => {
        const samples = this.service.getAllSamples()
        return res.status(200).json(samples)
    }
}