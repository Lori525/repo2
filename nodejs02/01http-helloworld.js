const http = require('http');
const fs = require('fs');

const server = http.createServer();

//2. 监听 Server 的 request 请求事件，设置请求处理函数
//    请求
//      处理
//    响应
//    一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
//    没有请求就没有响应。


const wwwwDir = 'D:/Nodejs/www';

server.on('request',(req,res) =>{
    let url = req.url;

    if(url === '/'){
        fs.readFile(wwwwDir+'/index.html',(err,data) =>{
            if(err){
                // return 有两个作用：
                //  1. 方法返回值
                //  2. 阻止代码继续往后执行
                return res.end('404 Not Found.');
            }
            res.end(data);
        })
    }else if(url === '/a.txt'){
        fs.readFile(wwwwDir+'/a.txt', (err,data) =>{
            if(err){
                return res.end('404 Not Found.');
            }
            res.end(data);
        })
    }else if(url === '/index.html'){
        fs.readFile(wwwwDir+'/index.html', (err,data) =>{
            if(err){
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    }else if(url === '/login/login.html'){
        fs.readFile(wwwwDir+'/login/login.html', (err,data) =>{
            if(err){
                return res.end('404 Not Found.');
            }
            res.end(data);
        });
    }
});

server.listen(3000, function(){
    console.log('server is running...');
});