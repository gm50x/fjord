/**
 * Exposing individual layers with the dependency injector
 */
const SamplesDependencyInjector = require('./src/dependency/SamplesDependencyInjector')

module.exports = class Samples {
    constructor() {
        const di = new SamplesDependencyInjector()
        this.GetAllSamples = di.GetAllSamples
        this.GetSampleById = di.GetSampleById
        this.Service = di.SamplesService
        this.Repository = di.SamplesRepository
    }
}