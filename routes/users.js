const express =  require('express');
const _ = require('lodash');

const {mongoose} = require('../db/db');
const {User} = require('../models/user');

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

module.exports = router;

