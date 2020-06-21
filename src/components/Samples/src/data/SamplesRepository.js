const SamplesModel = require('./models/SamplesModel')
module.exports = class SamplesRepository extends SamplesModel {
    constructor(di) {
        super(di)
    }

    create(sample) {
        return this.data.create(sample)
    }

    getAll() {
        return this.data.findAll()
    }

    getById(id) {
        return this.data.findByPk(id)
    }
}