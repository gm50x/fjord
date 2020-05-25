const { strictEqual } = require('assert')
const { AsyncWrapper } = require('../../../src/core/middlewares')

const className = 'AsyncWrapper'

describe(`[incomplete] ${className}`, () => {
    let instance
    beforeEach(() => {
        instance = new AsyncWrapper()
    })
    it(`Should instantiate an ${className} object`, () => {
        const actual = instance.constructor.name
        strictEqual(actual, className, `Object is not an instance of ${className}`)
    })

    it('Should have a default warp method', () => {
        const actual = instance.wrap !== undefined
        strictEqual(actual, true, 'Object does not include the wrap method')
    })

    /**
     * TODO: Implement more tests in this class
     */
})