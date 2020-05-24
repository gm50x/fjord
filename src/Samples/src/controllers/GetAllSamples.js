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

    activate() {
        return this.service.getAllSamples()
    }
}