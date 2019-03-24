const express =  require('express');
const _ = require('lodash');

const {mongoose} = require('../db/db');
const {User} = require('../models/user');


//authentication middlewares
const {authenticate} =  require('../middleware/authenticate');
const {allowUser} =  require('../middleware/authenticate');
const {allowAdmin} =  require('../middleware/authenticate');

const router = express.Router();

router.post('/signup',async (req,res)=>{

    const body = _.pick(req.body,['nic','email','password','firstName','lastName']);
    body.type = "user";
    const user = new User(body);

    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.json({token:token});
    })
    .catch(e=>{
        console.log(e);
        res.status(400).send(e)}
    ) 

});

router.post('/registerAdmin',allowAdmin,authenticate,async (req,res)=>{

    const body = _.pick(req.body,['nic','email','password','firstName','lastName']);
    body.type = "admin";
    const user = new User(body);

    user.save().then(()=>{
        res.json({token:true});
    })
    .catch(e=>{
        console.log(e);
        res.status(400).send(e)}
    ) 

});

router.post('/login',async (req,res)=>{
    const body = _.pick(req.body,['nic','password'])
    
    User.findByCredentials(body.nic,body.password).then(user=>{
        user.generateAuthToken().then(token=>{
            res.json({token:token});
        })
    }).catch(e=>{
        res.status(400).send({token:false});
    })

});

router.get('/me',authenticate,(req,res)=>{
    res.send(req.user)
 })
 
module.exports = router;

