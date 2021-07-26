const Blog = require('../models/Blogcontent');
const { Op } = require('sequelize');

// 数据添加数据方法
exports.add= async function(obj){
    const objs = await Blog.create(obj);
    return objs.toJSON();
}

// 数据查询方法
exports.getBlog = async function(id){
    const get = await Blog.findByPk(id)
    if(get){
        return get.toJSON()
    }
    return null;
}

//排序查询
exports.getOrderByBolg  = async function(page=0,limit=6){
    const result = await Blog.findAndCountAll({
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
// 查询所有
exports.getAll=async function(){
    const all = await Blog.findAll();
    return all;
}

// 分页查询
exports.getBlogs =async function(page,limit){
    const blogs = await Blog.findAndCountAll({
        limit: Number(page), // 每页多少条
        offset: Number(limit) // 跳过多少条
    })
    return {
        total: blogs.count,
        datas:JSON.parse(JSON.stringify(blogs.rows))
    }
}

// 删除
exports.deleteBlogs = async function(adminId){
    const delet = await Blog.destroy({
        where :{
            id : adminId
        }
    })
    return delet;
}

// 修改
exports.updateBlogs = async function(id,adminObj){
    const result = await Blog.update(adminObj,{
        where:{
            id
        }
    })
    return result;
}