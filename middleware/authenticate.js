let {User} = require('../models/user');

const allowUser = (req,res,next)=>{
    req.allowedUsers.push('user');
    next();
}

const allowAdmin = (req,res,next)=>{
    req.allowedUsers.push('admin');
    next();
}

const authenticate = (req,res,next)=>{
    const token = req.header('x-auth');
    
    User.findByToken(token).then((user)=>{
        
        if(!user){
            return Promise.reject()  //catch block will run
        }else if(!req.allowedUsers.includes(user.type)){
            return Promise.reject();
        }

        req.user = user
        req.token = token
        next()
    }).catch(e=>{
        res.status(401).send() //authentication needed
    })
}

module.exports={allowUser,allowAdmin,authenticate}