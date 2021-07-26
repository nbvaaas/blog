const Stay = require('../models/stay');
const { Op } = require('sequelize');

// 数据添加
exports.addStay= async function(obj){
    const objs = await Stay.create(obj);
    return objs.toJSON();
}
// 数据查询方法
exports.getStay = async function(BlogId){
    const get = await Stay.findAndCountAll({
        where:{
            BlogId
        }
    })
    return {
        total:get.count,
        datas:JSON.parse(JSON.stringify(get.rows))
    }
}
    // 删除
exports.deleteStay = async function(adminId){
    const delet = await Stay.destroy({
        where :{
            id : adminId
        }
    })
    return delet;
}
// 修改
exports.updateStay = async function(id,adminObj){
    const result = await Stay.update(adminObj,{
        where:{
            id
        }
    })
    return result;
}