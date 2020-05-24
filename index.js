const Samples = require('./src/Samples')

const samples = new Samples()

const result = {
    all: samples.GetAllSamples.activate(),
    one: samples.GetSampleById.activate(1)
}

console.log(result.all)
console.log(result.one)