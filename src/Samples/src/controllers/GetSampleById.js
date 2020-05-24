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

    activate(id) {
        id = Number(id)
        if (!id && id !== 0) {
            throw new Error('Validation Error: provided id is not valid')
        }
        return this.service.getSampleById(Number(id))
    }
}