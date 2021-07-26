const sequelize = require("./db");
const { DataTypes } =require("sequelize");

const Stay = sequelize.define("Stay",{
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    BlogId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    like: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    lowss: {
        type: DataTypes.STRING,
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
    createdAt:false,
    updatedAt:false,
    paranoid:false
})

module.exports = Stay;