const express = require('express');
const app = express();
const path = require("path")
const address = path.resolve(__dirname,"../public")
const query = require('querystring')
//静态伺服
app.use(express.static(address));

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use('/api/add',require('./api/add'))
app.use('/api/order',require('./api/order'))
app.use('/api/two',require('./api/two'))
app.use('/api/getAllBlog1',require('./api/getAllBlog1'))
app.use('/api/getAllBlog2',require('./api/getAllBlog2'))
app.use('/api/getMessage',require('./api/getMessage'))
app.use('/api/login',require('./api/login'))
app.use('/api/stay',require('./api/stay'))
app.use('/api/stay2',require('./api/stay2'))
app.use(require('./dealwithError'));





const port = 5050;
app.listen(port,()=>{
    console.log('端口号5050');
})
