require("dotenv").config();
const Server_Secrete_Password=process.env.Server_Secrete_Password;
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