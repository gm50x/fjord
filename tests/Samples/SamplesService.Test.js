const { strictEqual, doesNotThrow, throws } = require('assert')

const SamplesService = require('../../src/Samples/src/services/SamplesService')
const MockRepository = require('../utils/MockRepository')

const className = 'SamplesService'

describe(`${className}`, () => {
    let instance, repository
    beforeEach(() => {
        repository = new MockRepository()
        instance = new SamplesService({ repository })
    })

    it(`Should instantiate a ${className} object`, () => {
        strictEqual(instance.constructor.name, className, `Object is not an instance of ${className}`)
    })

    it(`Should include an appended repository object`, () => {
        const actual = instance.repository !== undefined
        strictEqual(actual, true, `Object does not include it's own repository`)
    })

    it(`Should have a getAllSamples method`, () => {
        const actual = instance.getAllSamples !== undefined
        strictEqual(actual, true, `Object does not include the getAllSamples method`)
    })

    it(`Should have a getAllSamples method`, () => {
        const actual = instance.getAllSamples !== undefined
        strictEqual(actual, true, `Object does not include the getAllSamples method`)
    })

    it(`Should not throw upon calling getAllSamples`, () => {
        repository.getAll = () => { }
        doesNotThrow(() => {
            instance.getAllSamples()
        }, 'Object throws upon calling activate')
    })

    it(`Should have a getSampleById method`, () => {
        const actual = instance.getSampleById !== undefined
        strictEqual(actual, true, `Object does not include the getSampleById method`)
    })

    it(`Should not throw upon calling getSampleById with numeric id`, () => {
        repository.getById = (id) => { }
        doesNotThrow(() => {
            instance.getSampleById(0)
        }, 'Object throws upon calling activate')
    })

    it(`Should throw upon calling getSampleById with a non-numeric id`, () => {
        repository.getById = (id) => { }
        throws(() => {
            instance.getSampleById('a')
        }, 'Object does not throws upon calling getSampleById with incorrect parameters')
    })
})