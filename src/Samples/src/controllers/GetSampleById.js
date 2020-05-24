/**
 * Dependent on service which is dependent on repository. 
 * 
 * Dep. Tree: Controller > Service > Repository
 */

const BaseController = require('../../../core/BaseController')
module.exports = class GetAllSampleById extends BaseController {
    constructor(di) {
        super(di)
    }

    activate(id) {
        return this.service.getSampleById(Number(id))
    }
}