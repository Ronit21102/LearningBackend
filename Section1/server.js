const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers)
    //for killing the event listner
    // process.exit();


    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>hi</title></head>')
    res.write('<body><h1>Hi this is respons</h1></body>')
    res.write('</html>')
    res.end();
    // so basically we can write after end in response object
})

server.listen(3000);