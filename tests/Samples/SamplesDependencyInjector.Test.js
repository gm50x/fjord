const { strictEqual } = require('assert')

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

    it(`Should have a getSampleById method`, () => {
        const actual = instance.getSampleById !== undefined
        strictEqual(actual, true, `Object does not include the getAllSamples method`)
    })
})