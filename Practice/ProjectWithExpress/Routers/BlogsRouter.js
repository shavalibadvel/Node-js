const express=require("express");
const {getAllBlogs,getBlogById,createBlog,updateBlogById,deleteBlogById}=require("../Controller/BlogsController");
const router=express.Router();
//some comments to check the git status and commit changes
router.post("/createBlog",createBlog);
router.get("/getAllBlogs",getAllBlogs);
router.get("/getBlogById/:id",getBlogById);
router.put("/updateBlogById/:id",updateBlogById);
router.delete("/deleteBlogById/:id",deleteBlogById);

module.exports=router;