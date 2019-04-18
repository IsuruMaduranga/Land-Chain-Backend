const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const AdSchema = new mongoose.Schema({
    ownerId:{
        type:String,
        required:true,
        minlength:1,
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
    city:{
        type:String,
        required:true,
        minlength:1,
        validate:{
            validator: function(v){
                return /^[A-Za-z]+$/.test(v);
            },
            message: 'City is not valid!'
        }
    },
    phone:{
        type:String,
        required:true,
        minlength:1,
        validate:{
            validator: function(v){
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Phone number is not valid!'
        }
    },
    size:{
        type:String,
        required:true,
        minlength:1,
        validate:{
            validator: function(v){
                return /^[0-9]+$/.test(v);
            },
            message: 'Phone number is not valid!'
        }
    },
    price:{
        type:String,
        required:true,
        minlength:1,
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
        default:'active',
        validate:{
            validator: function(v){
                return /^(active|processing|sold)$/.test(v);
            }
        }
    },
    createdAt:{ type: Date, default: Date.now }

});

AdSchema.statics.getAds =  function(id){
    return Ad.find({ownerId:id});
}

AdSchema.statics.getAllAds =  function(id){
    return Ad.find({ownerId:{$ne:id},status:"active"});
}


const Ad =  mongoose.model('Ad', AdSchema)

module.exports={
    Ad
}