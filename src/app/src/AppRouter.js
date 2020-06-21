const { BaseRouter } = require('../../core/base')
const { PostgresSequelizeConnection } = require('../../core/db')
const { Samples } = require('../../components')

module.exports = class AppRouter extends BaseRouter {
    constructor(di) {
        super(di)
        this.db = new PostgresSequelizeConnection({
            database: 'postgres',
            username: 'postgres',
            password: 'postgres@2020',
            host: 'localhost',
            dialect: 'postgres'
        })
        this._init()
    }

    addModule(moduleRouter) {
        this._routes.use(moduleRouter.getRoutes())
    }

    _init() {
        this.addModule(new Samples({ data: this.db }).getRouter({ router: this, basePath: '/samples' }))
    }
}