const SamplesService = require('../services/SamplesService')
const SamplesRepository = require('../data/SamplesRepository')
const Data = require('../data/data.json')
const GetAllSamples = require('../controllers/GetAllSamples')
const GetSampleById = require('../controllers/GetSampleById')

module.exports = class SamplesDependencyInjector {
    constructor() { }

    get GetAllSamples() {
        return new GetAllSamples({ service: this.SamplesService })
    }

    get GetSampleById() {
        return new GetSampleById({ service: this.SamplesService })
    }

    get SamplesService() {
        return new SamplesService({ repository: this.SamplesRepository })
    }

    get SamplesRepository() {
        return new SamplesRepository({ data: Data })
    }
}