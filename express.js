const http = require("http")
const express = require("express")

const app =  express()

app.get('/', (req,res)=>{
    return res.send("Hello from Page")
})

app.get('/about', (req,res)=>{
    return res.send("Hello from about Page" + "hy" + req.query.name+" age "+ req.query.age)
})

app.listen(8000,()=>console.log("server Started"))