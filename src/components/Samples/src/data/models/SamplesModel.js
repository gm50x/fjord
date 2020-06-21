const { DataTypes } = require('sequelize')

module.exports = class SamplesModel {
    constructor({ data }) {
        this.data = data.define('Sample', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            schema: 'fjord'
        })
    }
}