import jwt from "jsonwebtoken"

export const tokengenarator = (payload)=>{
   return jwt.sign(
    {id : payload._id , role : payload.role},
    process.env.JWTSECRETE,
    {expiresIn : "50d"}
   )
}

export const verifyToken = (token) => {
    return jwt.verify(token,process.env.JWTSECRETE)
}

