require('dotenv').config();
const express = require('express');
const {engine, create} = require("express-handlebars");
const users = require('./users/index');

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutsDir: __dirname+'/views/layouts',
    helpers: {
        json: function(context) {return JSON.stringify(context);},
    }
}));

app.get('/', async (req, res) => {
    const params = req.query;
    const userData = await users.getUsers(Number.parseInt(params.page));

    res.render('main', {layout: 'index', data: {users: userData.data, pagination}})
});

app.get('/users/:userId', async (req,res) => {
    const {userId} = req.params;
    const usern= await users.getUser(userId);
    console.log(user);
})