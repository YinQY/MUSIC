module.exports = {
    publicPath:'',
    devServer:{
        host:'0.0.0.0',
        port:8080,
        /*proxy:{
            '/mock':{
                target:'http://0.0.0.0:8070',
                //webSocket
                ws:false,
                //是否将主机头的原点改为目标的URL
                //如果设置为true，则访问/mock/a.json自动跳转到http://0.0.0.0:8070/a.json访问
                changeOrigin:false
            }
        }*/
    }
}