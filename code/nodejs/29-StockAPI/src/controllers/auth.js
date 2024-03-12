"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const User=require("../models/user")
const Token=require("../models/token")
const passwordEncrypt=require("../helpers/passwordEncrypt")
const jwt=require("jsonwebtoken")

module.exports={
    login: async(req,res)=>{

        const {username, email, password}=req.body
        if((username || email) && password){
            
            const user=await User.findOne({$or: [{username},{email}]})
            if(user && user.password== passwordEncrypt(password)) {

                if(user.is_active){
                    if(!(process.env.TOKEN_MODEL=='JWT')){
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
                    const accessToken=jwt.sign(user.toJSON(), process.env.ACCESS_KEY,{expiresIn:'40m'})
                    const refreshToken=jwt.sign({_id:user._id,password:user.password}, 
                        process.env.REFRESH_KEY,{expiresIn:'2d'})

                        res.send({
                            error:false,
                            bearer:{accessToken,refreshToken},
                            user
                        })
                }

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
        const auth=req.headers?.authorization || null // Token tokenKey or Bearer accessToken
        const tokenKey=auth ? auth.split(' ') : null // ['Token','tokenKey'] ['Bearer','accessToken'] 
        
        if(!(process.env.TOKEN_MODEL=='JWT')){
            let result={}
            if(tokenKey && tokenKey[0]=='Token'){
                // console.log(tokenKey[1])
                result=await Token.deleteOne({token:tokenKey[1]})
            }
            const messageLogout="Logout OK"
           

        }else{
            const messageLogout="Dont need logout"
        }
        res.send({
            error:false,
            message:messageLogout,
            result 
                        
        })
        
    },
    refresh: async(req,res)=>{

         /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'JWT: Refresh'
            #swagger.description = 'Refresh accessToken with refreshToken'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    bearer: {
                        refresh: '...refreshToken...'
                    }
                }
            }
        */

            const refreshToken = req.body?.bearer?.refresh

            if (refreshToken) {
    
                const jwtData = await jwt.verify(refreshToken, process.env.REFRESH_KEY)
    
                if (jwtData) {
    
                    const { id, password } = jwtData
    
                    if (id && password) {
    
                        const user = await User.findOne({ _id: id })
    
                        if (user && user.password == password) {
    
                            if (user.isActive) {
    
                                // JWT AccessToken:
                                const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_KEY, { expiresIn: '30m' })
    
                                res.status(200).send({
                                    error: false,
                                    bearer: {
                                        access: accessToken
                                    }
                                })
    
                            } else {
    
                                res.errorStatusCode = 401
                                throw new Error('This account is not active.')
                            }
                        } else {
    
                            res.errorStatusCode = 401
                            throw new Error('Wrong id or password.')
                        }
                    } else {
    
                        res.errorStatusCode = 401
                        throw new Error('There is not id and password in refreshToken.')
                    }
                } else {
    
                    res.errorStatusCode = 401
                    throw new Error('sa')
                }
    
            } else {
                
                res.errorStatusCode = 401
                throw new Error('Please enter token.refresh')
            }
    
    },

}