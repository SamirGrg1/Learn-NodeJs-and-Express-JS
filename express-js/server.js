const http=require('http');
const fs=require('fs');
const url=require('url');
const port=8000;
const express=require('express');

const app=express();


app.get('/',(req,res)=>{
   return res.send("Welcome to Homepage through express js");
})

app.get('/about',(req,res)=>{
    let name=req.query.name;
    let age=req.query.age;
   return  res.send(`Welcome to About page through express js name=${name} and age=${age}`);
    
})

const server=http.createServer(app);
app.listen(port,()=>{
    console.log("Server started with express js");
})