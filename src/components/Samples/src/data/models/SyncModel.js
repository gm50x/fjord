const { PostgresSequelizeConnection } = require('../../../../../core/db')
const SamplesModel = require('./SamplesModel')

new SamplesModel({
    data: new PostgresSequelizeConnection({
        database: 'postgres',
        username: 'postgres',
        password: 'postgres@2020',
        host: 'localhost',
        dialect: 'postgres'
    })
}).data.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Could not sync to database:', err.message))