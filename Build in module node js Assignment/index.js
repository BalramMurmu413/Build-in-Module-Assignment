const fs = require('fs');


fs.readFileSync('nodejs_architecture.txt' , function (err, data) {
if (err){
    console.log("error" , err)
}
else{
    console.log("Data" ,data.toString())
    return data.toString;
}

})

let content = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused o n input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displa yed by a client's browser that obtains all the application's resources over the internet.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server-side languages, Node js has distinct ad vantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier"
fs.appendFileSync('nodejs_architecture.txt', content, (er, data)=>{
if(err){
    console.log("Error" , err)
}else{
    console.log("successfully append", data.toString());
}
})

// ====Deleting nodejs_achitecture.txt ==========

/*   

fs.unlink("nodejs_architecture.txt",(error) =>{
    if(error){
        console.log("Error in deleting file" , error)
    }else{
        console.log("File Delete Successfully");
    }
    
})
*/