const Blog = require('../models/BlogcontentTwo');
const { Op } = require('sequelize');

// 数据添加数据方法
exports.addTwo= async function(obj){
    const objs = await Blog.create(obj);
    return objs.toJSON();
}

// 数据查询方法
exports.getBlogTwo = async function(id){
    const get = await Blog.findByPk(id)
    if(get){
        return get.toJSON()
    }
    return null;
}

//排序查询
exports.getOrderByBolgTwo  = async function(page=0,limit=6){
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


// 分页查询
exports.getBlogsTwo =async function(page,limit){
    const blogs = await Blog.findAndCountAll({
        limit: Number(page), // 每页多少条
        offset: Number(limit) // 跳过多少条
    })
    return {
        total: blogs.count,
        datas:JSON.parse(JSON.stringify(blogs.rows))
    }
}
// 查询所有
exports.getAllTwo=async function(){
    const all = await Blog.findAll();
    return all;
}

// 删除
exports.deleteBlogsTwo = async function(adminId){
    const delet = await Blog.destroy({
        where :{
            id : adminId
        }
    })
    return delet;
}

// 修改
exports.updateBlogsTwo = async function(id,adminObj){
    const result = await Blog.update(adminObj,{
        where:{
            id
        }
    })
    return result;
}