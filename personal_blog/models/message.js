const sequelize = require('./db');
const { DataTypes } = require('sequelize'); 
const Messages = sequelize.define('Messages',{
    like: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    lowss: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt : false, 
    updatedAt : false,
    paranoid : true,
})
module.exports = Messages;