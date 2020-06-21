const { BaseService } = require('../../../../core/base')

module.exports = class SamplesService extends BaseService {

    constructor(di) {
        super(di)
    }

    async getAllSamples() {
        return this.repository.getAll()
    }

    async getSampleById(id) {
        id = Number(id)
        if (!id && id !== 0) {
            return Promise.reject(new Error('Validation Error: provided id is not valid'))
        }
        return this.repository.getById(id)
    }

    async addSample(sample) {
        return this.repository.create(sample)
    }
}