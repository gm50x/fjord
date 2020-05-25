const { strictEqual } = require('assert')

const { BaseRouter } = require('../../../src/core/base')

const { MockRouter, MockWrapper } = require('../../utils')


const className = 'BaseRouter'

describe(`${className}`, () => {
    let instance, router, wrapper
    beforeEach(() => {
        router = new MockRouter()
        wrapper = new MockWrapper()
        instance = new BaseRouter({ basePath: 'tests', router, wrapper })
    })

    it(`Should instantiate a ${className}`, () => {
        const actual = instance.constructor.name
        strictEqual(actual, className, `Object is not an instance of ${className}`)
    })

    it('Should have an addRoute mehtod', () => {
        const actual = instance.addRoute !== undefined
        strictEqual(actual, true, 'Object does not include the addRoute method')
    })

    it('Should include a getRoutes method', () => {
        const actual = instance.getRoutes !== undefined
        strictEqual(actual, true, 'Object does not include the getRoutes method')
    })

    it('Should append a route to the routes object on addRoute', () => {
        instance.addRoute('GET', 'add-route', () => { })
        const actual = instance._routes['/tests/add-route'].get !== undefined
        strictEqual(actual, true, 'Add route does not append the requested route')
    })

    it('Should return appended routes object', () => {
        const actual = instance.getRoutes() instanceof MockRouter
        strictEqual(actual, true, 'getRoutes does not return the corresponding object')
    })
})