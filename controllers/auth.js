const User = require('../models/user');
/////////////////////////////////////////

const getLogin = (req, res) => {
    res.status(200)
        .render('auth/login', {  //會直接從views裡面抓，在views下面開一個auth資料夾把login.ejs放進去
            path: '/login',
            pageTitle: 'Login'
        });
};

const postLogin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ where: { email } }) //email:email
        .then((user) => {
            if (!user) {
                console.log('login: 找不到此 user 或密碼錯誤');
                return res.redirect('/login'); //如果已符合就不繼續執行
            }
            if (user.password === password) {
                console.log('login: 成功');
                return res.redirect('/')
            }
            console.log('login: 找不到此 user 或密碼錯誤');
            res.redirect('/login');
        })
        .catch((err) => {
            console.log('login error:', err);
        });
};

const postLogout = (req, res) => {
    // TODO: 實作 logout 機制
    res.redirect('/login')
}

module.exports = {
    getLogin,
    postLogin,
    postLogout,
};