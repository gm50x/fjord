/**
 * Exposing individual layers with the dependency injector
 */
const GetAllSamples = require('./src/controllers/GetAllSamples')
const GetSampleById = require('./src/controllers/GetSampleById')
const SamplesService = require('./src/services/SamplesService')
const SamplesRepository = require('./src/data/SamplesRepository')
const Data = require('./src/data/data.json')

const SamplesDependencyInjector = require('./src/dependency/SamplesDependencyInjector')

module.exports = class Samples {
    constructor() {
        const di = this._mapDependencies()
        this.GetAllSamples = di.GetAllSamples
        this.GetSampleById = di.GetSampleById
        this.Service = di.SamplesService
        this.Repository = di.SamplesRepository
    }

    _mapDependencies() {
        return new SamplesDependencyInjector({
            getAllSamples: GetAllSamples,
            getSampleById: GetSampleById,
            service: SamplesService,
            repository: SamplesRepository,
            data: Data
        })
    }
}