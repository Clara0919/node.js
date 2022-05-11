console.log("hello I'm clara");

//內建模組
const path = require('path'); //匯入模組

//第三方模組
const cowsay = require('cowsay');


//自建模組
const hello = require('./hello'); //匯入模組
//////////////////////////////////////////////////////////////////////////////////////////

hello.sayGoodnight();
console.log('dirname', __dirname);
console.log('filename', __filename);
console.log(path.join(__dirname, 'index.js'));


let sentences = ['Hello', 'World', 'I\'m a cow.'];

sentences.forEach((sentence) => {
    console.log(cowsay.say({
        text: sentence,
        e: "^^",
        T: "U "
    }));
});
