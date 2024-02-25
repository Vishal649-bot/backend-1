const http = require("http")
const express = require("express")
const bodyparser = require('body-parser')
const app =  express()
const adminRoutes =  require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyparser.urlencoded())

app.use(adminRoutes)

app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})


app.listen(8000,()=>console.log("server Started")) 