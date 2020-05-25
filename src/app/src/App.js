const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { ErrorHandler } = require('../../core/middlewares')

const AppRouter = require('./AppRouter')

module.exports = class App {
    constructor() {
        this.app = express()
        this.router = new AppRouter({})
        this._init()
    }

    _init() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use(morgan('dev'))
        this.app.use(this.router.getRoutes())
        this.app.use(new ErrorHandler().middleware)
    }

    start(config = { port: 8000, env: 'DEVELOPMENT' }) {
        const { port, env } = config
        this.app.listen(port, () => console.log(`Server is running in ${env} mode on port ${port}.`))
    }
}





