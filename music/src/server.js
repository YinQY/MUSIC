const express = require('express');
const cors = require('cors');
const app = express();

//只接受origin的methods方法的请求
app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST']
}));

app.get('/test',(req,res)=>{
    console.log('correct!');
});

app.listen(8085,'0.0.0.0',()=>{
    console.log("server run successfully!" + new Date());
});