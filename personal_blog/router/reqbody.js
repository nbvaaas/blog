const qs = require('querystring');
module.exports=(req,res,next)=>{
    if(req.headers["content-type"] === "application/x-www-form-urlencoded"){
        let obj = '';
        req.on('data',(chunk)=>{
            obj += chunk.toString('utf-8')
        })
        req.on('end',()=>{
            const query = qs.parse(obj);
            req.body = query;
            next()
        })
    }else{
        next()
    }
}