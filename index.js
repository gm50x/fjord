/**
 * API
 */

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

const Samples = require('./src/components/Samples')
const { GetAllSamples, GetSampleById } = new Samples()

app.get('/samples', GetAllSamples.activate)
app.get('/samples/:id', GetSampleById.activate)

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message })
})

app.listen(8000, () => console.log('Server listening on port 8000'))