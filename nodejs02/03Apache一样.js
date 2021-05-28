const http = require('http');
const fs = require('fs');

const server = http.createServer();

const wwwDir = 'D:/Nodejs/www';

server.on('request', (req,res) =>{
    let url = req.url;

    let filePath ='/index.html';
    if(url !=='/'){
        filePath=url;
    }
    fs.readFile(wwwDir+filePath, (err,data) =>{
        if(err){
            return res.end('404 Not Found..');
        }
        res.end(data);
    })
});

server.listen(3000, function(){
    console.log('server is running....');
})