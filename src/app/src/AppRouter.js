const { BaseRouter } = require('../../core/base')

const { Samples } = require('../../components')

module.exports = class AppRouter extends BaseRouter {
    constructor(di) {
        super(di)
        this._init()
    }

    _init() {
        const { GetAllSamples, GetSampleById } = new Samples()
        this.addRoute('GET', 'samples', GetAllSamples.activate)
        this.addRoute('GET', 'samples/:id', GetSampleById.activate)
    }
}