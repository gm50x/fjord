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

const Samples = require('./src/Samples')
const { GetAllSamples, GetSampleById } = new Samples()

app.get('/samples', GetAllSamples.activate)
app.get('/samples/:id', GetSampleById.activate)

app.listen(8000, () => console.log('Server listening on port 8000'))
// const Samples = require('./src/Samples')

// const samples = new Samples()

// const result = {
//     all: samples.GetAllSamples.activate(),
//     one: samples.GetSampleById.activate(1)
// }

// console.log(result.all)
// console.log(result.one)
