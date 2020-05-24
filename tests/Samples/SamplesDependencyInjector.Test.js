const { strictEqual } = require('assert')

const SamplesDependencyInjector = require('../../src/Samples/src/dependency/SamplesDependencyInjector')

const MockService = require('../utils/MockService')
const MockRepository = require('../utils/MockRepository')
const MockData = require('../utils/MockData')

const className = 'SamplesDependencyInjector'

describe(`${className}`, () => {
    let instance, repository, service, data, mocker
    beforeEach(() => {
        getAllSamples = MockGetAllSamples
        getSampleById = MockGetSampleById
        service = MockService
        repository = MockRepository
        data = MockData
        instance = new SamplesDependencyInjector({ service, repository, data, getAllSamples, getAllSamples, getSampleById })
    })

    it(`Should instantiate a ${className} object`, () => {
        strictEqual(instance.constructor.name, className, `Object is not an instance of ${className}`)
    })

    it(`Should include an appended SamplesService object`, () => {
        const actual = instance.SamplesService !== undefined
        strictEqual(actual, true, `Object does not include it's own SamplesService`)
    })

    it(`Should instantiate a service object`, () => {
        const actual = instance.SamplesService instanceof MockService
        strictEqual(actual, true, `Object object is not an instance of the service`)
    })

    it(`Should include an appended SamplesRepository object`, () => {
        const actual = instance.SamplesRepository !== undefined
        strictEqual(actual, true, `Object does not include it's own SamplesRepository`)
    })

    it(`Should instantiate a repository object`, () => {
        const actual = instance.SamplesRepository instanceof MockRepository
        strictEqual(actual, true, `Object object is not an instance of the repository`)
    })

    it(`Should include an appended GetAllSamples object`, () => {
        const actual = instance.GetAllSamples !== undefined
        strictEqual(actual, true, `Object does not include it's own GetAllSamples`)
    })

    it(`Should instantiate a GetAllSamples object`, () => {
        const actual = instance.GetAllSamples instanceof MockGetAllSamples
        strictEqual(actual, true, `Object object is not an instance of the GetAllSamples`)
    })

    it(`Should have a GetSampleById object`, () => {
        const actual = instance.GetSampleById !== undefined
        strictEqual(actual, true, `Object does not include the GetSampleById object`)
    })

    it(`Should instantiate a GetSampleById object`, () => {
        const actual = instance.GetSampleById instanceof MockGetSampleById
        strictEqual(actual, true, `Object object is not an instance of the GetSampleById`)
    })
})


class MockGetAllSamples { }
class MockGetSampleById { }