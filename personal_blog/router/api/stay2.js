const express = require('express');
const Stay = require('../../services/stay2');
const pot = require('../reqbody');
const {asyncHand} = require('../getSend') //
const router = express.Router();
// 添加
router.post('/',asyncHand(async(req,res)=>{
    return await Stay.addStay(req.body)
}))
// 修改
router.post('/:id',asyncHand(async(req,res)=>{
    return await Stay.updateStay(req.params.id,req.body)
}))

// 查询
router.get('/:id',asyncHand(async(req,res)=>{
    return await Stay.getStay(req.params.id)
}))
module.exports = router;