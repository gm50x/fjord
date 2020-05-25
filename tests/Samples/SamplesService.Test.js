const { strictEqual } = require('assert')

const SamplesService = require('../../src/components/Samples/src/services/SamplesService')
const { MockRepository } = require('../utils')

const className = 'SamplesService'

describe(`${className}`, () => {
    let instance, repository, err
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

    it(`Should not throw upon calling getAllSamples`, async () => {
        repository.getAll = async () => Promise.resolve()
        await instance.getAllSamples().catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object throws upon calling getAllSamples')
    })

    it(`Should have a getSampleById method`, () => {
        const actual = instance.getSampleById !== undefined
        strictEqual(actual, true, `Object does not include the getSampleById method`)
    })

    it(`Should not throw upon calling getSampleById with numeric id`, async () => {
        repository.getById = (id) => Promise.resolve()
        await instance.getSampleById(0).catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object throws upon calling getAllSamples')
    })

    it(`Should reject upon calling getSampleById with a non-numeric id`, async () => {
        repository.getById = (id) => Promise.reject()
        await instance.getSampleById('a').catch(error => err = error)
        const actual = err !== undefined
        strictEqual(actual, true, 'Object did not reject non-numeric id')
    })
})