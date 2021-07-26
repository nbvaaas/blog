exports.getResult = function(obj){
    return {
        code:0,
        msg:'',
        data:obj
    }
};

exports.getErr=function(err = 'error',errCode=503){
    return {
        Code:errCode,
        msg:err,
    }
}

exports.asyncHand = (handler)=>{
    return async (req,res,next)=>{
        try{
            const result = await handler(req,res,next);
            res.send(exports.getResult(result))
        }catch(err){
            next(err)
        }
    }
}