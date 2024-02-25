const http = require("http")
const express = require("express")
const bodyparser = require('body-parser')
const app =  express()


app.use(bodyparser.urlencoded())

app.use('/add-product', (req,res,next)=>{
    console.log('In the Middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">Add product</button></input></input></form>')
})

app.use('/product', (req,res,next)=>{
    console.log(req.body);
   
    res.redirect('/')
})

app.use('/', (req,res,next)=>{
    console.log('In the 2 Middleware');
    res.send('<h1>Hello from express</h1>')
})

app.listen(8000,()=>console.log("server Started")) 