export const errorHandler = (err , req , res , next)=>{
    return res.status(err.message||500).json({
        succsess : false,
        message : err.message || "INTERNAL SERVER ERROR"
    })
}

