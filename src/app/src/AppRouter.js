const { BaseRouter } = require('../../core/base')

const { Samples } = require('../../components')

module.exports = class AppRouter extends BaseRouter {
    constructor(di) {
        super(di)
        this._init()
    }

    addModule(moduleRouter) {
        this._routes.use(moduleRouter.getRoutes())
    }

    _init() {
        this.addModule(new Samples().getRouter({ router: this, basePath: 'samples' }))
    }
}