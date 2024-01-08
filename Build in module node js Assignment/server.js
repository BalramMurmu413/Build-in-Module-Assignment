const http = require('http');
let port = 3000;

const server = http.createServer((req, res)=>{
if(req.url == '/'){
    res.write("<h1>I Am Happy To Learn Fulll Stack Web Development From PW Skills! </h1>")

}else if(req.url=='/pwskills'){
    res.write("<h1>Welcome to Pw Skills </h1>")
}else {
    res.write(`<h1>Sorry!  you are looking for not available</h1>`)
}
res.end()
}).listen(port, ()=>{
console.log(`Server is started at port: ${port}`)
})

