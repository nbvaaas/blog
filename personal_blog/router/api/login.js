const express = require('express');
const login = require('../../services/login');
const pot = require('../reqbody');
const {asyncHand} = require('../getSend') //
const router = express.Router();
router.post('/',asyncHand(async (req,res)=>{
    return await login.logins(req.body)
}))
module.exports=router;