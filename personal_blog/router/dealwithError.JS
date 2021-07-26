module.exports = (err,req,res,next)=>{
    if(err){
        const errs = {
            code:503,
            mgs: err instanceof Error ? err.message : err,
        }
        res.status(503).send(errs)
    }else{
        next()
    }

}