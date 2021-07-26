const express = require('express');
const Blog = require('../../services/BlogcontentServices');
const pot = require('../reqbody');
const {asyncHand} = require('../getSend') //

const router = express.Router();

router.get('/',asyncHand(async(req,res)=>{
    return await Blog.getOrderByBolg()
}))

module.exports=router;