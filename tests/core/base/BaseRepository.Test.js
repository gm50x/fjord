const { strictEqual } = require('assert')

const { BaseRepository } = require('../../../src/core/base')

const { MockData } = require('../../utils')
const className = 'BaseRepository'

describe(`${className}`, () => {
    let instance, data
    beforeEach(() => {
        data = new MockData()
        instance = new BaseRepository({ data })
    })

    it(`Should instantiate a ${className} object`, () => {
        const actual = instance.constructor.name
        strictEqual(actual, className, `Object is not an instance of ${className}`)
    })

    it(`Should have an appended data object`, () => {
        const actual = instance.data !== undefined
        strictEqual(actual, true, `Object does not include a data`)
    })

    it(`Should include an appended data of the injected class`, async () => {
        const actual = instance.data instanceof MockData
        strictEqual(actual, true, `Object's appended data is not the injected class`)
    })
})