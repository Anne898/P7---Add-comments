const {Sequelize, DataTypes} = require('sequelize');

const Model = Sequelize.Model;

const sequelize = new Sequelize('games','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.')
    })
    .catch((err) => {
        console.error('MySQL connection error', err);
    });

module.exports = {sequelize};

