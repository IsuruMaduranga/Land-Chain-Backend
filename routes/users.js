const express =  require('express');
const _ = require('lodash');

const {mongoose} = require('../db/db');
const {User} = require('../models/user');
const {authenticate} =  require('../middleware/authenticate');

const router = express.Router();

router.post('/',async (req,res)=>{

    const body = _.pick(req.body,['nic','email','password','firstName','lastName']);
    const user = new User(body);

    user.save().then(()=>{
        return user.generateAuthToken()
    }).then((token)=>{
        res.header('x-auth',token).send(user)
    })
    .catch(e=>res.status(400).send(e)) 

});

router.post('/login',async (req,res)=>{
    const body = _.pick(req.body,['nic','password'])
    
    User.findByCredentials(body.nic,body.password).then(user=>{
        user.generateAuthToken().then(token=>{
            res.header('x-auth',token).send(user)
        })
    }).catch(e=>{
        res.status(400).send()
    })

});

router.get('/me',authenticate,(req,res)=>{
    res.send(req.user)
 })
 
module.exports = router;

