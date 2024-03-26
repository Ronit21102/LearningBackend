const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;
   
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>message me</title></head>')
        res.write('<Body><form action="/message" method="POST"><input type="text" name="message"><Button type="submit">Submit</Button></Body>')
        res.write('</html>')
        return res.end();
    }
    if(url==='/message' && method=='POST'){
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            
            fs.writeFileSync('message.txt',message);
        })

        res.statusCode= 302
        res.setHeader=('Location','/')
        return res.end()
    }

    
})


server.listen(8080)