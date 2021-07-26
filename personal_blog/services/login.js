const Login = require('../models/login');
const { Op } = require('sequelize');
exports.logins =async function(obj){
    const tf = await Login.findAll({
        where:{
            admin:obj.admin,
            pwd:obj.pwd
        }
    })
    if(tf.length != 0){
        return true;
    }
    return false;
}