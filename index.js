const express = require('express')
const bodyParser = require('body-parser')
const {engine, create} = require('express-handlebars')
const users = require('./users/index')

const app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', engine({
    layoutDis: __dirname + '/views',
    helper: {
        json: function(context) { return JSON.stringify(context);},
    }
}))

app.get('/',async (req,res) => {
    const param = req.query;
    const userData = await users.getUsers(Number.parseInt(param.page))
    console.log(userData)
    res.render('user', {users: userData.data})
})

app.use((req, res) => {
    res.set('Content-Type','text/html')
    res.end("liên kết này không được hỗ trợ")
})


app.listen(8080, () => console.log('http://localhost:8080'))