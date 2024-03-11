"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const User=require("../models/user")
const Token=require("../models/token")
const passwordEncrypt=require("../helpers/passwordEncrypt")

module.exports={
    login: async(req,res)=>{

        const {username, email, password}=req.body
        if((username || email) && password){
            
            const user=await User.findOne({$or: [{username},{email}]})
            if(user && user.password== passwordEncrypt(password)) {

                if(user.is_active){
                    // token üret
                    let tokenData=await Token.findOne({user_id: user._id})
                    if(!tokenData){

                        tokenData=await Token.create(
                            {
                                user_id: user._id ,  
                                token: passwordEncrypt(user._id+Date.now())                                
                            }
                        )
                        // ekstra
                        /*
                        const { randomUUID }=require("node:crypto") // random uniq bir değer üretiyor         
                        tokenData=await Token.create(
                            {
                                user_id: user._id ,  
                                token: randomUUID                               
                            }
                        )*/
                    }
                    res.send({
                        error:false,
                        key:tokenData.token,
                        user
                    })

                }else{
                    res.errorStatusCode=401
                    throw new Error("user not active")
                }


            }else{
                res.errorStatusCode=401
                 throw new Error("password wrong")
            }
        }else{
            res.errorStatusCode=401
            throw new Error("email / username  or password required ")
        }

    },
    logout: async(req,res)=>{   
        const auth=req.headers?.authorization || null // Token tokenKey
        const tokenKey=auth ? auth.split(' ') : null // ['Token','tokenKey']
        
        let result={}
        if(tokenKey && tokenKey[0]=='Token'){
            // console.log(tokenKey[1])
            result=await Token.deleteOne({token:tokenKey[1]})
        }
        res.send({
            error:false,
            message:"Logout OK",
            result 
                        
        })
        
    }

}