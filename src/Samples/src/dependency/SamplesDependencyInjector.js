module.exports = class SamplesDependencyInjector {
    constructor({ repository, service, data, getAllSamples, getSamplesById }) {
        this._Data = data
        this._SamplesService = service
        this._SamplesRepository = repository
        this._GetAllSamples = getAllSamples
        this._GetSampleById = getSamplesById
    }

    get GetAllSamples() {
        return new this._GetAllSamples({ service: this.SamplesService })
    }

    get GetSampleById() {
        return new this._GetSampleById({ service: this.SamplesService })
    }

    get SamplesService() {
        return new this._SamplesService({ repository: this.SamplesRepository })
    }

    get SamplesRepository() {
        return new this._SamplesRepository({ data: this._Data })
    }
}