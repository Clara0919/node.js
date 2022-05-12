// 第一個區塊 內建模組
const path = require('path');

// 第二個區塊 第三方模組(套件)
const express = require('express');

// 第三個區塊 自建模組
const bodyParser = require('body-parser');

////////////////////////////////////////////////////////////////

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'publics')));

// middleware
app.use((req, res, next) => {
    console.log('Hello!');
    next();
});

app.use((req, res, next) => {
    console.log('World!');
    next();
});

app.get('/', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
        console.log('login data', req.body);
    } else {
        console.log('欄位尚未填寫完成！')
    }
});


app.get('/login', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));