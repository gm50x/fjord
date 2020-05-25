const { strictEqual, deepStrictEqual } = require('assert')

const SamplesRepository = require('../../src/components/Samples/src/data/SamplesRepository')

const { MockData } = require('../utils')

const className = 'SamplesRepository'

describe(`${className}`, () => {
    let instance, data, err
    beforeEach(() => {
        data = new MockData()
        instance = new SamplesRepository({ data })
        err = undefined
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

    it(`Should not throw upon calling getAll`, async () => {
        await instance.getAll().catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object throws upcon calling getAll')
    })

    it(`Should not ring the bell`, async () => {
        const actual = await instance.getAll()
        deepStrictEqual(actual, data, 'Object is ringing the bell')
    })

    it(`Should have a getById method`, () => {
        const actual = instance.getById !== undefined
        strictEqual(actual, true, `Object does not have a getById method`)
    })

    it(`Should not throw upon calling getById`, async () => {
        await instance.getById(0).catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object throws upcon calling getById')
    })

    it(`Should return object with specified id`, async () => {
        const actual = (await instance.getById(1)).id === 1
        strictEqual(actual, true, `Object does not return requested object`)
    })

    it(`Should return foo upon providing id 1`, async () => {
        const actual = (await instance.getById(1)).word === 'foo'
        strictEqual(actual, true, `Object does not return requested object`)
    })

    it(`Should return undefined if no object is found for the specified id`, async () => {
        const actual = (await instance.getById(100)) === undefined
        strictEqual(actual, true, `Object does not return requested object`)
    })
})