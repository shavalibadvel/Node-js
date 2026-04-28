require("dotenv").config();
const Server_Secrete_Password=process.env.Server_Secrete_Password;
// We check password validation and if possible we can also check for the user role and permissions in this middleware for better security and access control of the app
//ouigjigiugjkgeiugrijberg 
function passwordAuthMiddleware(req,res,next){
    const header=req.headers;
    const authorizationHeader=header?.authorization;
    if(authorizationHeader!==Server_Secrete_Password){
        res.status(401).json({'message':"Unauthorized access. Invalid password. from header from middleware"});
        return;
    }else{
        next();
    }
}
module.exports={passwordAuthMiddleware};