const ExpressRouter = require('express').Router

const { AsyncWrapper } = require('../../middlewares')

module.exports = class BaseRouter {
    constructor({ basePath = '', router = ExpressRouter(), wrapper = new AsyncWrapper() }) {
        this._routes = router
        this.basePath = basePath
        this.asyncWrapper = wrapper.wrap
    }

    addRoute(method, path = '', handler) {
        this._routes[method.toLowerCase()](
            `/${this.basePath}/${path}`
                .replace(/\/\/+/, '/')
                .replace(/\/+$/, ''),
            this.asyncWrapper(handler)
        )
    }

    getRoutes() {
        return this._routes
    }
}