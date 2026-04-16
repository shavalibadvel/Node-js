const express=require("express");
const router=express.Router();
const { getUserByFirstNameHandler,getAllUsersDataHandler,getUserByIdHandler,getUsersByGenderHandler } = require("../Controller/UserController");


router.get("/getAllUsersData", getAllUsersDataHandler);

//query params api
router.get("/getUsersByGender", getUsersByGenderHandler);
// Url params api
router.get("/getUserById/:id", getUserByIdHandler);
router.get("/getUserByFirstName/:firstName",getUserByFirstNameHandler);

module.exports=router;