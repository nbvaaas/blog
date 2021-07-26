const express = require('express');
const Message = require('../../services/messageContent');
const pot = require('../reqbody');
const {asyncHand} = require('../getSend') //

// 获取所有数据
const router = express.Router();
router.get('/',asyncHand(async (req,res)=>{
    return await Message.getAllMessage()
}))
// 添加数据
router.post('/',asyncHand(async(req,res,next)=>{
    return await Message.addMessage(req.body);
}))
// 修改
router.post('/:id',asyncHand(async(req,res,next)=>{
    return await Message.updateBlogsMessage(req.params.id,req.body)
}))
// 删除
router.delete('/:id',asyncHand(async(req,res,next)=>{
    return await Message.deleteBlogsMessage(req.params.id)
}))
module.exports = router;