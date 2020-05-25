const { strictEqual } = require('assert')
const { ErrorHandler } = require('../../src/core/Middlewares')
const { MockRequest, MockResponse } = require('../utils')

const className = 'ErrorHandler'

describe(`${className}`, () => {
    let instance, err, req, res, next
    beforeEach(() => {
        instance = new ErrorHandler()
        req = new MockRequest({})
        res = new MockResponse({})
        err = new Error('Mock Test Error')
    })
    it(`Should instantiate an ${className} object`, () => {
        const actual = instance.constructor.name
        strictEqual(actual, className, `Object is not an instance of ${className}`)
    })

    it('Should have a default middleware method', () => {
        const actual = instance.middleware !== undefined
        strictEqual(actual, true, 'Object does not include the middleware method')
    })

    it('Should handle errors with default http status code 500', () => {
        instance.middleware(err, req, res, next)
        const actual = res.statusCode
        strictEqual(actual, 500, 'Object default error code has diverged')
    })

    it('Should include an error property', () => {
        instance.middleware(err, req, res, next)
        const actual = ['error'].every(p => Object.getOwnPropertyNames(res.obj).includes(p))
        strictEqual(actual, true, 'Object does not include the error message')
    })

    it('Should handle errors with specified http status code', () => {
        err.statusCode = 400
        instance.middleware(err, req, res, res)
        const actual = res.statusCode === err.statusCode
        strictEqual(actual, true, 'Object error status code has diverged')
    })
})