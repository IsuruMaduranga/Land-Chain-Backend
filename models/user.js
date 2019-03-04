const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nic:{
        type:String,
        required:true,
        minlength:1,
        unique:true,
        validate:{
            validator: function(v){
                return /^[0-9]{9}V$/.test(v);
            },
            message: 'NIC number is not valid!'
        }
    },
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
        unique:true,
        validate: {
            validator: validator.isEmail,
            message: 'Email is not valid!'
        }
    },
    firstName:{
        type:String,
        required:true,
        minlength:1
    },
    lastName:{
        type:String,
        required:true,
        minlength:1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
});


UserSchema.methods.generateAuthToken = function(){
    const user = this
    const access = 'auth'
    const token = jwt.sign({_id: user._id.toHexString(),access},'secret').toString()

    user.tokens.push({access,token})

    return user.save().then(()=>{
        return token
    })
}

//overriding toJSON method of mongoose
UserSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    return _.pick(userObject,['_id','nic','email','firstname','lastName'])
}


//runs before save event occurs
UserSchema.pre('save',function(next){
    const user = this

    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password=hash
                next()
            })
        })
    }else{
        next()
    }
})

const User =  mongoose.model('User', UserSchema)

module.exports={
    User
}