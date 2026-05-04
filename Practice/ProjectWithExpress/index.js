// import { fitnessHandler,homeHandler } from "./Controller/ControllerHandler.js";
const express=require("express");
const UserRouter=require("./Routers/UserRouter");
const HomeRouter=require("./Routers/HomeRouter");
const { default: mongoose } = require("mongoose");
const app=express();
const PORT=8069;
const uri="mongodb://localhost:27017/" //server
const dbName="Node-Crio" //database name
mongoose.connect(uri+dbName).then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
});

// moved everything to the router for better code management and readability urikgnougrikjdsn
app.use("/",HomeRouter);
app.use("/api/v1/users/",UserRouter);

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});