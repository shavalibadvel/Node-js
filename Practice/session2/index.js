const express=require("express");
const app=express();
const PORT=8069;

app.get("/",(req,res)=>{
    // res.send("Hello World! This is a response from the server. using just send method.");
    res.status(201).send("Hello World! This is a response from the server. with status code 201.");
});

app.get("/about",(req,res)=>{
    res.send("This is the about page.");
});
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});