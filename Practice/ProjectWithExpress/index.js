
const express=require("express");
const UserRouter=require("./Routers/UserRouter");
const HomeRouter=require("./Routers/HomeRouter");
const BlogRouter=require("./Routers/BlogsRouter");
const { default: mongoose } = require("mongoose");
const Blog = require("./Model/blogModel");
const User = require("./Model/UserModel");

const app = express();

const PORT=8069;
const uri="mongodb://localhost:27017/" //server
const dbName="Node-Crio" //database name
mongoose.connect(uri+dbName).then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
});
app.use(express.json()); //middleware to parse json data from the request body

app.use("/",HomeRouter);
app.use("/api/v1/users/",UserRouter);
app.use("/api/v1/blog/",BlogRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});