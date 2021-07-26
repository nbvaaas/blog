const express = require('express');
const Blog = require('../../services/BlogcontentServicesTwo');
const pot = require('../reqbody');
const {asyncHand} = require('../getSend') //

const router = express.Router();
router.get('/',asyncHand(async (req,res)=>{
    return await Blog.getAllTwo()
}))
module.exports = router;