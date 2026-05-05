const Blog = require("../Model/blogModel");
async function createBlog(req,res){
    console.log(req.body);
    const{title,content,author,nationality}=req.body;
    // blog model object
    const blogsModelObject=new Blog({
        title,
        content,
        author,
        nationality
    });
    //save in db
    try{
        const response=await blogsModelObject.save();
        res.status(201).json(response)
    }catch(error){
        // console.error("Error creating blog:", error);
        res.status(500).json({message:"something went wrong while creating the blog"});
    }
}

function getAllBlogs(req,res){
    res.status(200).json({"message":"All blogs data"});
}

function getBlogById(req,res){
    const id=req.params.id;
    res.status(200).json({"message":`Blog data for the id ${id}`});
}

function updateBlogById(req,res){
    const id=req.params.id;
    res.status(200).json({"message":`Blog data updated for the id ${id}`});
}

function deleteBlogById(req,res){
    const id=req.params.id;
    res.status(200).json({"message":`Blog data deleted for the id ${id}`});
}

module.exports={createBlog,getAllBlogs,getBlogById,updateBlogById,deleteBlogById};