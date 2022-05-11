console.log("hello I'm clara");

//內建模組
const path = require('path'); //匯入模組
const http = require('http');
const url = require('url');

//第三方模組



//自建模組
const hello = require('./hello'); //匯入模組
//////////////////////////////////////////////////////////////////////////////////////////

hello.sayGoodnight();
console.log('dirname', __dirname);
console.log('filename', __filename);
console.log(path.join(__dirname, 'index.js'));
const server = http.createServer((req, res) => { //req:request res:response
    // console.log('第一個參數是瀏覽器對 web server 的 request', req);
    // console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    console.log('req url', req.url)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h1>This is home page</h1>');

    }
    if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h1>This is login page</h1>');
    }
    res.end();//代表請求結束 記得寫
});

server.listen(3000, () => {
    console.log('running server on port 3000');
});

console.log(url.parse('https://www.youtube.com/watch?v=ssZTiB8yg94&t=43s'));//用來分析網址內含的狀態


