const Message = require('../models/message');
const { Op } = require('sequelize');

// 数据添加数据方法
exports.addMessage= async function(obj){
    const objs = await Message.create(obj);
    return objs.toJSON();
}

// 数据查询方法
exports.getBlogMessage = async function(id){
    const get = await Message.findByPk(id)
    if(get){
        return get.toJSON()
    }
    return null;
}

//排序查询
exports.getOrderByBolgMessage  = async function(page=0,limit=6){
    const result = await Message.findAndCountAll({
        order: [
          ['Reading', 'DESC'] 
        ],
        offset:page*limit,
        limit:+limit
      })
    return {
        total:result.count,
        datas:JSON.parse(JSON.stringify(result.rows))
    };
}


// 分页查询
exports.getBlogsMessage =async function(page,limit){
    const blogs = await Message.findAndCountAll({
        limit: Number(page), // 每页多少条
        offset: Number(limit) // 跳过多少条
    })
    return {
        total: blogs.count,
        datas:JSON.parse(JSON.stringify(blogs.rows))
    }
}
// 查询所有
exports.getAllMessage=async function(){
    const all = await Message.findAll();
    return all;
}

// 删除
exports.deleteBlogsMessage = async function(adminId){
    const delet = await Message.destroy({
        where :{
            id : adminId
        }
    })
    return delet;
}

// 修改
exports.updateBlogsMessage = async function(id,adminObj){
    const result = await Message.update(adminObj,{
        where:{
            id
        }
    })
    return result;
}