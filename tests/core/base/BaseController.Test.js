const { strictEqual } = require('assert')

const { BaseController } = require('../../../src/core/base')

const { MockService } = require('../../utils')

const className = 'BaseController'

describe(`${className}`, () => {
    let instance, service, err
    beforeEach(() => {
        service = new MockService()
        instance = new BaseController({ service })
        err = undefined
    })

    it(`Should instantiate a ${className} object`, () => {
        strictEqual(instance.constructor.name, className, `Object is not an instance of ${className}`)
    })

    it(`Should have an appended service object`, () => {
        const actual = instance.service !== undefined
        strictEqual(actual, true, `Object does not include a service`)
    })

    it(`Should have a default activate method`, () => {
        const actual = instance.activate !== undefined
        strictEqual(actual, true, `Object does not include the default activate method`)
    })

    it(`Should throw upon calling activate`, async () => {
        await instance.activate().catch(error => err = error)
        const actual = err !== undefined
        strictEqual(actual, true, `Object does not throw upon calling activate`)
    })
})