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
        id = Number(id)
        if (!id && id !== 0) {
            throw new Error('Validation Error: provided id is not valid')
        }
        return this.repository.getById(id)
    }
}