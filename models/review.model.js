const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;
const {sequelize} = require('./../config/db');

class Review extends Model {};

Review.init({
    username: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        // allowNull: false,
    },
    contentReview: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'review',
});

module.exports = {Review};