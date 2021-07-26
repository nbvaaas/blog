const sequelize = require('./db');
const { DataTypes } = require('sequelize'); 
const Blogs = sequelize.define('Blogs', {  
    like: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    Reading: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Blogcontent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Blogtitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BlogIntroduction:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    Grammar:{
        type:DataTypes.TEXT,
        allowNull:true
    }
}, {
    createdAt : false, 
    updatedAt : false,
    paranoid : true,
});
module.exports = Blogs;