// import { fitnessHandler,homeHandler } from "./Controller/ControllerHandler.js";
const express=require("express");
const { fitnessHandler,homeHandler } = require("./Controller/ControllerHandler");
const app=express();
const PORT=8069;
const usersData=require("./userData");
app.get("/",(req,res)=>{
    // res.send("Hello World! This is a response from the server. using just send method.");
    res.status(201).send("Hello World! This is a response from the server. with status code 201.");
});
app.get("/home",homeHandler)

app.get("/about",(req,res)=>{
    res.send("This is the about page.");
});
app.get("/fitness",fitnessHandler);

app.get("/api/v1/users/getAllUsersData", (req, res) => {
    const users=usersData.data;
    const payload={
        success:true,
        message:"Users data retrieved successfully",
        users,
        size:users.length
    }
    res.status(200).json(payload);
});
app.get("/api/v1/users/getUsersByGender",(req,res)=>{
    const query=req.query;
    const searchedGender=query?.gender;
    const filteredData=usersData.data.filter((user)=>user.gender===searchedGender);
    const payload={
        success:true,
        message:"Users data with gender retrieved successfully",
        users:filteredData,
        size:filteredData.length
    };
    res.status(200).json(payload);
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});