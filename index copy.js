const { App } = require('./src/app')

const { PORT, NODE_ENV } = process.env

const app = new App()
app.start(PORT, NODE_ENV)