// import { fitnessHandler,homeHandler } from "./Controller/ControllerHandler.js";
const express=require("express");
const UserRouter=require("./Routers/UserRouter");
const HomeRouter=require("./Routers/HomeRouter");
const app=express();
const PORT=8069;

app.use("/",HomeRouter);
app.use("/api/v1/users/",UserRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});