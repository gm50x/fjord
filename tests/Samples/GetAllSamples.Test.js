const { strictEqual } = require('assert')

const GetAllSamples = require('../../src/components/Samples/src/controllers/GetAllSamples')

const { MockService, MockRequest, MockResponse } = require('../utils')

const className = 'GetAllSamples'

describe(`${className}`, () => {
    let instance, service, res, req, err
    beforeEach(() => {
        service = new MockService()
        service.getAllSamples = () => { }
        instance = new GetAllSamples({ service })
        req = new MockRequest({})
        res = new MockResponse({})
        err = undefined
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

    it(`Should throw upon calling activate`, async () => {
        await instance.activate(req, res).catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object throws upon calling activate')
    })
})