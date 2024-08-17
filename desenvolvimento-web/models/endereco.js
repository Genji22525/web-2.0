const { Sequelize, DataTypes } = require('sequelize');

const Localizacao = sequelize.define(
    'Localizacao',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        complemento: {
            type: DataTypes.STRING,
        },
        bairro: {
           type: DataType.STRING,
        allowNull: false,
        },
        cidade: {
            type: DataType.STRING,
         allowNull: false,
         },
         estado: {
            type: DataType.STRING,
         allowNull: false,
         },
         municipioIBGE: {
            type: DataType.STRING,
         allowNull: false,
         },
        }

)
