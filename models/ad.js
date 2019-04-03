const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const AdSchema = new mongoose.Schema({
    ownerId:{
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
    landId:{
        type:String,
        required:true,
        minlength:1
    },
    address:{
        type:String,
        required:true,
        minlength:1
    },
    phone:{
        type:String,
        required:true,
        validate:{
            validator: function(v){
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Phone number is not valid!'
        }
    },
    description:{
        type:String,
        maxlength:100
    },
    price:{
        type:String,
        required:true,
        validate:{
            validator: function(v){
                return /^[0-9]+$/.test(v);
            },
            message: 'Price is not valid!'
        }
    },
    status:{
        type: String,
        required: true,
        validate:{
            validator: function(v){
                return /^(valid|invalid)$/.test(v);
            }
        }
    }

});

UserSchema.statics.getAll =  function(id){
    return Ad.find({ownerId:id});
}



const Ad =  mongoose.model('Ad', AdSchema)

module.exports={
    Ad
}