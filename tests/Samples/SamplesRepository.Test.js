const { strictEqual, doesNotThrow, throws } = require('assert')

const SamplesRepository = require('../../src/Samples/src/data/SamplesRepository')
const MockData = require('../utils/MockData')

const className = 'SamplesRepository'

describe(`${className}`, () => {
    let instance, data
    beforeEach(() => {
        data = new MockData()
        instance = new SamplesRepository({ data })
    })

    it(`Should instantiate a ${className} object`, () => {
        strictEqual(instance.constructor.name, className, `Object is not an instance of ${className}`)
    })

    it(`Should include an appended data object`, () => {
        const actual = instance.data !== undefined
        strictEqual(actual, true, `Object does not include it's own data object`)
    })

    it(`Should have a getAll method`, () => {
        const actual = instance.getAll !== undefined
        strictEqual(actual, true, `Object does not have a getAll method`)
    })

    it(`Should not throw upon calling getAll`, () => {
        doesNotThrow(() => {
            instance.getAll()
        }, 'Object throws upon calling getAll')
    })

    it(`Should have a getById method`, () => {
        const actual = instance.getById !== undefined
        strictEqual(actual, true, `Object does not have a getById method`)
    })

    it(`Should not throw upon calling getById`, () => {
        doesNotThrow(() => {
            instance.getById(0)
        }, 'Object throws upon calling getById')
    })

    it(`Should return object with specified id`, () => {
        const actual = instance.getById(1).id === 1
        strictEqual(actual, true, `Object does not return requested object`)
    })

    it(`Should return foo upon providing id 1`, () => {
        const actual = instance.getById(1).word === 'foo'
        strictEqual(actual, true, `Object does not return requested object`)
    })

    it(`Should return undefined if no object is found for the specified id`, () => {
        const actual = instance.getById(100) === undefined
        strictEqual(actual, true, `Object does not return requested object`)
    })
})