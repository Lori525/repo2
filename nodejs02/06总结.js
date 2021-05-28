//1.引入服务和引入模板
const http = require('http');
const fs = require('fs');

const template = require('art-template');

//2.创建服务
const server = http.server.createServer();

//3.公共路径
let wwwDir = 'D:/Nodejs/www';

server.on('request',(req,res) =>{
    let url = req.url;
    //读取文件
    fs.readFile('./tpl.html',(err,data) =>{
        if(err){
            return res.end('404 Not Found..');
        }
        fs.readdir(wwwDir,(err,files)=>{
            if(err){
                return res.end('Can not find wwwDir')
            }
            // 使用模板引擎解析替换data中的模板字符串
            // 去xmpTempleteList.html中编写模板语法
            let htmlStr = template.render(data.toString(),{
                title: 'D:/Nodejs/www',
                files:files 
            });
            res.end(htmlStr);
        });
    });
});

server.listen(3000,function(){
    console.log('running...');
})

/*
1.jQuery中的each 和 原生JavaScript方法forEach的区别：
	提供源头：
    	原生js是es5提供的（不兼容IE8）,
        jQuery的each是jQuery第三方库提供的（如果要使用需要用2以下的版本也就是1.版本）,它的each方法主要用来遍历jQuery实例对象（伪数组）,同时也可以做低版本forEach的替代品,jQuery的实例对象不能使用forEach方法，如果想要使用必须转为数组（[].slice.call(jQuery实例对象)）才能使用
2.模块中导出多个成员和导出单个成员
3.301和302的区别：
	301永久重定向,浏览器会记住
    302临时重定向
4.exports和module.exports的区别:
	每个模块中都有一个module对象
    module对象中有一个exports对象
    我们可以把需要导出的成员都挂载到module.exports接口对象中
	也就是`module.exports.xxx = xxx`的方式
    但是每次写太多了就很麻烦，所以Node为了简化代码，就在每一个模块中都提供了一个成员叫`exports`
    `exports === module.exports`结果为true,所以完全可以`exports.xxx = xxx`
    当一个模块需要导出单个成员的时候必须使用`module.exports = xxx`的方式，=,使用`exports = xxx`不管用,因为每个模块最终return的是module.exports,而exports只是module.exports的一个引用,所以`exports`即使重新赋值,也不会影响`module.exports`。
    有一种赋值方式比较特殊：`exports = module.exports`这个用来新建立引用关系的。*/