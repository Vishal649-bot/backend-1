const http = require("http")
const express = require("express")

const app =  express()


app.use((req,res,next)=>{
    console.log('In the 2 Middleware');
    res.send('<h1>Hello from express</h1>')
})

app.listen(8000,()=>console.log("server Started")) 