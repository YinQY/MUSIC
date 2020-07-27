const express = require('express');
const cors = require('cors');
const app = express();

//只接受origin的methods方法的请求
app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST']
}));



app.get('/test',(req,res)=>{
    res.json({
        message:"yes"
    });
})

/**error handler */
app.use((err,req,res,next)=>{
    if(err){
        let {message} = err;
        res.status(500).json({
            message
        });
    }
});
/**404 not found handler*/
app.use((req,res,next)=>{
    res.json({
        message:'not found'
    });
});

/**listening */
app.listen(8085,'0.0.0.0',()=>{
    console.log("server run successfully!" + new Date());
});