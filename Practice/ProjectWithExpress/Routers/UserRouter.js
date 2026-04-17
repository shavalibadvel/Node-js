const express=require("express");
const router=express.Router();
const { getUserByFirstNameHandler,getAllUsersDataHandler,getUserByIdHandler,getUsersByGenderHandler } = require("../Controller/UserController");
const { passwordAuthMiddleware } = require("../Middleware/PasswordAuthMiddleware");

router.get("/getAllUsersData", passwordAuthMiddleware,getAllUsersDataHandler);

//query params api
router.get("/getUsersByGender", passwordAuthMiddleware,getUsersByGenderHandler);
// Url params api
router.get("/getUserById/:id", passwordAuthMiddleware,getUserByIdHandler);
router.get("/getUserByFirstName/:firstName",passwordAuthMiddleware,getUserByFirstNameHandler);

module.exports=router;