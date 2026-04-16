const usersData=require("../userData");
function getUserByFirstNameHandler(req,res){
    const params=req.params;
    const firstName=params?.firstName
    const user=usersData.data.find((user)=>user.name.first.toLowerCase()===firstName.toLowerCase());
    if(user){
        res.status(200).json({
            success:true,
            message:"User data retrieved successfully",
            user
        });
    }else{
        res.status(404).json({
            success:false,
            message:"User not found"
        });
    }
}
function getAllUsersDataHandler(req,res){
    const users=usersData.data;
    const payload={
        success:true,
        message:"Users data retrieved successfully",
        users,
        size:users.length
    }
    res.status(200).json(payload);
}
function getUsersByGenderHandler(req,res){
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
}
function getUserByIdHandler(req,res){ const id=req.params.id;
    const user=usersData.data.find((user)=>user.id===Number(id));
    if(user){
        res.status(200).json({
            success:true,
            message:"User data retrieved successfully",
            user
        });
    }else{
        res.status(404).json({
            success:false,
            message:"User not found"
        });
    }
}
module.exports={getUserByFirstNameHandler,getAllUsersDataHandler,getUsersByGenderHandler,getUserByIdHandler};