const { strictEqual, doesNotThrow, throws } = require('assert')

const GetSampleById = require('../../src/Samples/src/controllers/GetSampleById')

const MockService = require('../utils/MockService')
const MockRequest = require('../utils/MockRequest')
const MockResponse = require('../utils/MockResponse')

const className = 'GetSampleById'

describe(`${className}`, () => {
    let instance, service, req, res
    beforeEach(() => {
        service = new MockService()
        instance = new GetSampleById({ service })
        req = new MockRequest({})
        res = new MockResponse({})
    })

    it(`Should instantiate a ${className} object`, () => {
        strictEqual(instance.constructor.name, className, `Object is not an instance of ${className}`)
    })

    it(`Should have a default activate method`, () => {
        const actual = instance.activate !== undefined
        strictEqual(actual, true, `Object does not include the default activate method`)
    })

    it(`Should include an appended service object`, () => {
        const actual = instance.service !== undefined
        strictEqual(actual, true, `Object does not include it's own service`)
    })

    it(`Should not throw upon calling activate with a numeric id`, () => {
        service.getSampleById = (id) => { }
        req.params.id = 0
        doesNotThrow(() => {
            instance.activate(req, res)
        }, 'Object throws upon calling activate')
    })

    it(`Should throw upon calling activate with a non-numeric id param`, () => {
        service.getSampleById = (id) => { }
        req.params.id = 'a'
        throws(() => {
            instance.activate(req, res)
        }, 'Object does not throws upon calling activate with incorrect parameters')
    })
})