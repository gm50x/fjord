const { strictEqual, doesNotThrow } = require('assert')

const GetAllSamples = require('../../src/Samples/src/controllers/GetAllSamples')
const MockService = require('../utils/MockService')

const className = 'GetAllSamples'

describe(`${className}`, () => {
    let instance, service
    beforeEach(() => {
        service = new MockService()
        instance = new GetAllSamples({ service })
    })

    it(`Should instantiate a ${className} object`, () => {
        strictEqual(instance.constructor.name, className, `Object is not an instance of ${className}`)
    })

    it(`Should include an appended service object`, () => {
        const actual = instance.service !== undefined
        strictEqual(actual, true, `Object does not include it's own service`)
    })

    it(`Should have a default activate method`, () => {
        const actual = instance.activate !== undefined
        strictEqual(actual, true, `Object does not include the default activate method`)
    })

    it(`Should not throw upon activate`, () => {
        service.getAllSamples = () => { }
        doesNotThrow(() => {
            instance.activate()
        }, 'Object throws upon calling activate')
    })

})