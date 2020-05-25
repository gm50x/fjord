const { strictEqual } = require('assert')

const GetSampleById = require('../../src/components/Samples/src/controllers/GetSampleById')

const { MockService, MockRequest, MockResponse } = require('../utils')
const className = 'GetSampleById'

describe(`${className}`, () => {
    let instance, service, req, res, err
    beforeEach(() => {
        service = new MockService()
        service.getSampleById = (id) => { }
        instance = new GetSampleById({ service })
        req = new MockRequest()
        res = new MockResponse()
        err = undefined
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

    it(`Should not throw upon calling activate with a numeric id`, async () => {
        req.params.id = 1
        await instance.activate(req, res).catch(error => err = error)
        const actual = err === undefined
        strictEqual(actual, true, 'Object threw')
    })

    it(`Should throw upon calling activate with a non-numeric id param`, async () => {
        req.params.id = 'a'
        await instance.activate(req, res).catch(error => err = error)
        const actual = err !== undefined
        strictEqual(actual, true, 'Object did not throw upon passing a non-numeric id')
    })
})