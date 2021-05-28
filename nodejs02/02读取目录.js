const fs = require('fs');
   /*   1. fs.stat  检测是文件还是目录(目录 文件是否存在) 
        2. fs.mkdir  创建目录 （创建之前先判断是否存在） 
        3. fs.writeFile  写入文件(文件不存在就创建,但不能创建目录) 
        4. fs.appendFile 写入追加文件 
        5.fs.readFile 读取文件 
        6.fs.readdir 读取目录 
        7.fs.rename 重命名 
        8. fs.rmdir  删除目录 
        9. fs.unlink 删除文件
*/
fs.readdir('D:/Nodejs/www', (err,files) =>{
    if(err){
        return console.log('目录不存在');
    }
    console.log(files);
});