const { strictEqual } = require('assert')

const { BaseController } = require('../../src/core/base')
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

    it(`Should be an instance of the ${BaseController.name} class`, () => {
        const actual = instance instanceof BaseController
        strictEqual(actual, true, `Object is not an instance of ${BaseController.name}`)
    })

    it(`Should include an appended service object`, () => {
        const actual = instance.service !== undefined
        strictEqual(actual, true, `Object does not include it's own service`)
    })

    it(`Should have a default activate method`, () => {
        const actual = instance.activate !== undefined
        strictEqual(actual, true, `Object does not include the default activate method`)
    })

    it(`Should not throw upon calling activate`, async () => {
        await instance.activate(req, res).catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object throws upon calling activate')
    })
    
    it(`Should return status code 200 upon success`, async () => {
        await instance.activate(req, res).catch(error => err = error)
        const actual = res.statusCode
        strictEqual(actual, 200, 'Object does not return 200 upon success')
    })

})