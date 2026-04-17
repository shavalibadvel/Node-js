const express=require("express");
const { fitnessHandler,homeHandler } = require("../Controller/ControllerHandler");
const router = express.Router();

router.get("/",(req,res)=>{
    // res.send("Hello World! This is a response from the server. using just send method.");
    res.status(201).send("Hello World! This is a response from the server. with status code 201.");
});
router.get("/home",homeHandler)

router.get("/about",(req,res)=>{
    res.send("This is the about page.");
});
router.get("/fitness",fitnessHandler);
module.exports=router;