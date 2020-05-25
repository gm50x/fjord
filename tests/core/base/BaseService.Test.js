const { strictEqual } = require('assert')

const { BaseService } = require('../../../src/core/base')

const { MockRepository } = require('../../utils')
const className = 'BaseService'

describe(`${className}`, () => {
    let instance, repository
    beforeEach(() => {
        repository = new MockRepository()
        instance = new BaseService({ repository })
    })

    it(`Should instantiate a ${className} object`, () => {
        const actual = instance.constructor.name
        strictEqual(actual, className, `Object is not an instance of ${className}`)
    })

    it(`Should have an appended repository object`, () => {
        const actual = instance.repository !== undefined
        strictEqual(actual, true, `Object does not include a repository`)
    })

    it(`Should include an appended repository of the injected class`, async () => {
        const actual = instance.repository instanceof MockRepository
        strictEqual(actual, true, `Object's appended repository is not the injected class`)
    })
})