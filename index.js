const express = require('express');

const port = 8000;

const app = express();

app.set('view engine','ejs');

const path = require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/chart',(req,res)=>{
    return res.render('chart');
})

app.get('/form',(req,res)=>{
    return res.render('form');
})

app.get('/button',(req,res)=>{
    return res.render('button');
})

app.get('/typography',(req,res)=>{
    return res.render('typography');
})

app.get('/icon',(req,res)=>{
    return res.render('icon');
})

app.get('/table',(req,res)=>{
    return res.render('table');
})

app.get('/blank',(req,res)=>{
    return res.render('blank');
})

app.get('/404',(req,res)=>{
    return res.render('404');
})

app.get('/500',(req,res)=>{
    return res.render('500');
})

app.get('/login',(req,res)=>{
    return res.render('login');
})

app.get('/register',(req,res)=>{
    return res.render('register');
})

app.listen(port,(err)=>{
    if(err){
        console.log("server is not responding!!");
        return false;
    }
    console.log(`server is start on port : ${port}`);
})