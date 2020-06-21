const GetAllSamples = require('./src/controllers/GetAllSamples')
const GetSampleById = require('./src/controllers/GetSampleById')
const AddSample = require('./src/controllers/AddSample')
const SamplesService = require('./src/services/SamplesService')
const SamplesRepository = require('./src/data/SamplesRepository')

const SamplesDependencyInjector = require('./src/dependency/SamplesDependencyInjector')

module.exports = class Samples {
    constructor({ data }) {
        const di = this._mapDependencies(data)
        this.GetAllSamples = di.GetAllSamples
        this.GetSampleById = di.GetSampleById
        this.AddSample = di.AddSample
        this.Service = di.SamplesService
        this.Repository = di.SamplesRepository
        this.data = di.data
    }

    getRouter({ router, basePath }) {
        router.addRoute('POST', `${basePath}`, this.AddSample.activate)
        router.addRoute('GET', `${basePath}`, this.GetAllSamples.activate)
        router.addRoute('GET', `${basePath}/:id`, this.GetSampleById.activate)
        return router
    }

    _mapDependencies(data) {
        return new SamplesDependencyInjector({
            getAllSamples: GetAllSamples,
            getSampleById: GetSampleById,
            addSample: AddSample,
            service: SamplesService,
            repository: SamplesRepository,
            data: data
        })
    }
}