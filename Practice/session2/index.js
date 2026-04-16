// import { fitnessHandler,homeHandler } from "./Controller/ControllerHandler.js";
const express=require("express");
const { fitnessHandler,homeHandler } = require("./Controller/ControllerHandler");
const UserRouter=require("./Routers/UserRouter");
const app=express();
const PORT=8069;
app.get("/",(req,res)=>{
    // res.send("Hello World! This is a response from the server. using just send method.");
    res.status(201).send("Hello World! This is a response from the server. with status code 201.");
});
app.get("/home",homeHandler)

app.get("/about",(req,res)=>{
    res.send("This is the about page.");
});
app.get("/fitness",fitnessHandler);

app.use("/api/v1/users",UserRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});