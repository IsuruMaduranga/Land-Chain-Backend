let {User} = require('../models/user');

const authenticate = (req,res,next)=>{
    const token = req.header('x-auth')
    
    User.findByToken(token).then((user)=>{
        
        if(!user){
            return Promise.reject()  //catch block will run
        }

        req.user = user
        req.token = token
        next()
    }).catch(e=>{
        res.status(401).send() //authentication needed
    })
}

module.exports={authenticate}