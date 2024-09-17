const http=require('http');
const fs=require('fs');
const express=require('express');
const server=http.createServer((req,res)=>{
    // console.log("New request ");
    // console.log(req.headers)
    const log=`${Date.now()}: ${req.url}: New Request \n`;
    fs.appendFile("./file.txt",log,(err,result)=>{
        switch(req.url){
            case "/":
                res.end("Hello from Server 1");
                break;
            case "/home":
                res.end("Welcome to Home Page");
                break;
            case "/about":
                res.end("Hi, I am Krishna Bahadur Gurung");
                break;
            default:
                res.end("404 not found");
                break;
                
        }
        
    })
    // console.log(req);
    
});

server.listen(3000,()=>{
    console.log("server started !")
});