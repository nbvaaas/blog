const sequelize = require('./db');
const { DataTypes } = require('sequelize'); 
const Login = sequelize.define('Login',{
    admin:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pwd:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    createdAt : false, 
    updatedAt : false,
    paranoid : true,
})
module.exports=Login;