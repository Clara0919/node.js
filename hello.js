// hello.js
const sayHello = () => {
    console.log('Hello!');
};
const sayGoodnight = () => {
    console.log('Goodnight!');
};

// module.exports.say = sayHello; 匯出(say是自訂義的方程式名稱)
module.exports = {
    sayHello: sayHello,  //key跟value是一樣的 所以可以直接寫 sayHello, 就好
    sayGoodnight: sayGoodnight, // sayGoodnight,
    title: "I'm Clara"

}; //用物件方式比較好管理

console.log('module', module);