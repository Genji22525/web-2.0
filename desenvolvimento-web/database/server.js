const Sequelize = require('sequelize')
const config = require('../config/database')

const Endereco = require('models/endereco')
const { default: ModelManager } = require('sequelize/types/model-manager')

const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)


ModelManager.exports = connection