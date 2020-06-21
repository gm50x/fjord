const { Sequelize } = require('sequelize')

module.exports = class PostgresSequelizeConnection extends Sequelize {
    constructor({ database, username, password, host }) {
        super({ database, username, password, host, dialect: 'postgres', quoteIdentifiers: false, logging: false, define: { version: true } })
    }
}