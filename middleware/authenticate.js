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
    if(!token){
        res.status(401).send({message:'Authentication needed'});
    }
    User.findByToken(token).then((user)=>{
        if(!user){
            throw new Error('Authentication needed');
        }else if(!req.allowedUsers.includes(user.type)){
            throw new Error('Prohibited');
        }
        req.user = user
        req.token = token
        next()
    }).catch(e=>{
        if(e.message==='Authentication needed'){
            res.status(401).send({message:e.message});
        }else if(e.message==='Prohibited'){
            res.status(403).send({message:e.message});
        }
    })
}

module.exports={allowUser,allowAdmin,authenticate}