const http = require("http");
const fs = require("fs");
const url=require("url");
const port=8000;


function handler(req,res){
    if(req.url==="/favicon.ico") return res.end();
    const log=`${req.url}: ${req.method} new request \n`;
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile("file.txt",log,(err,data)=>{
        switch(myurl.pathname){
            case "/":
                if(req.method=='GET'){
                    res.end("Welcome to homepage");
                }
                
                break;
            case "/about":
                const username=myurl.query.name;
                res.end(`Hi, I am ${username}`);
                break;
            case "/search":
                    const search = myurl.query.search_query;
                    res.end(`You are searching for ${search}`);
                    break;
            case "/signup":
                if(req.method=='GET') res.end("Signup");
            default:
                res.end("404 not found");
                break;
        }
    })
}

const server=http.createServer(handler);
server.listen(port, () => {
    console.log("Server Started!")
})