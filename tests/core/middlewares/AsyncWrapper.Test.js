const { strictEqual, doesNotThrow } = require('assert')
const { AsyncWrapper } = require('../../../src/core/middlewares')

const className = 'AsyncWrapper'

describe.only(`${className}`, () => {
    let instance, err
    beforeEach(() => {
        instance = new AsyncWrapper()
        err = undefined
    })

    it(`Should instantiate an ${className} object`, () => {
        const actual = instance.constructor.name
        strictEqual(actual, className, `Object is not an instance of ${className}`)
    })

    it('Should have a default warp method', () => {
        const actual = instance.wrap !== undefined
        strictEqual(actual, true, 'Object does not include the wrap method')
    })

    it('Should wrap a function', async () => {
        const actual = (await instance.wrap(() => Promise.resolve('Test'))()) === 'Test'
        strictEqual(actual, true)
    })

    it('Should wrap a rejection error', async () => {
        await (instance.wrap(() => Promise.reject(new Error('Test Error')))())
            .catch(error => err = error)
        const actual = err !== undefined
        strictEqual(actual, true, 'Object does not wrap a promise rejection')
    })
})