/**
 * Dependent on repository. 
 * 
 * Dep. Tree: Service > Repository
 */

const BaseService = require('../../../core/BaseService')

module.exports = class SamplesService extends BaseService {

    constructor(di) {
        super(di)
    }

    getAllSamples() {
        return this.repository.getAll()
    }

    getSampleById(id) {
        return this.repository.getById(id)
    }
}