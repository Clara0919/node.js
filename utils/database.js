const Sequelize = require('sequelize');
const database = new Sequelize('demo', 'admin', 'admin', {
    dialect: 'mysql',
    host: '130.211.120.155' //有自己資料庫的話這邊應該寫localhost
});

module.exports = database;