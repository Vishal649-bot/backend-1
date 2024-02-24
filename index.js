const http = require('http')



const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><h1>Welecome Home</h1></body>')
        res.write('</html>')
       return res.end()
    } else if(url === '/about')
    {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><h1>Welecome about us</h1></body>')
        res.write('</html>')
       return res.end()
    }else(url === '/node')
    {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><h1>Welecome to my node js</h1></body>')
        res.write('</html>')
       return res.end()
    }
    
})

server.listen(3000) 