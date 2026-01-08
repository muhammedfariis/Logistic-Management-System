import jwt from "jsonwebtoken"

export const tokengenarator = (payload)=>{
   return jwt.sign(
    {id : user._id , role : user.role.tolowercase()},
    process.env.JWTSECRETE,
    {expiresIn : "50d"}
   )
}

export const verifyToken = (token) => {
    return jwt.verify(token,process.env.JWTSECRETE)
}