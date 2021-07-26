const express = require('express');
const Blog = require('../../services/BlogcontentServices');
const pot = require('../reqbody');
const {asyncHand} = require('../getSend') //

const router = express.Router();


// 请求数据
router.get('/:id',asyncHand(async(req,res)=>{
    return await Blog.getBlog(req.params.id)
}))

// 请求所有数据
router.get('/',asyncHand(async(req,res)=>{
    return await Blog.getAll()
}))

// 分页查询
router.get('/:page/:limit',asyncHand(async(req,res)=>{
    return await Blog.getBlogs(req.params.page,req.params.limit)
}))

// 添加数据
router.post('/',asyncHand(async(req,res,next)=>{
    return await Blog.add(req.body);
}))
// 修改
router.put('/:id',asyncHand(async(req,res,next)=>{
    return await Blog.updateBlogs(req.params.id,req.body)
}))

// 删除
router.delete('/:id',asyncHand(async(req,res,next)=>{
    return await Blog.deleteBlogs(req.params.id)
}))
module.exports=router;