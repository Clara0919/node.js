console.log("hello I'm clara");
const hello = require('./hello'); //匯入模組
const path = require('path'); //匯入模組
hello.sayGoodnight();
console.log('dirname', __dirname);
console.log('filename', __filename);
console.log(path.join(__dirname, 'index.js'));
