const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');

const UserSchema = new mongoose.Schema({
    nic: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{9}V$/.test(v);
            },
            message: 'NIC number is not valid!'
        }
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Email is not valid!'
        }
    },
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: 'First name is not valid!'
        }
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: 'Last name is not valid!'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    type: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(admin|user)$/.test(v);
            }
        }
    }
});


UserSchema.methods.generateAuthToken = function () {
    const user = this
    return jwt.sign({ _id: user._id.toHexString(), type: user.type, nic: user.nic }, config.get('jwtPK'), { expiresIn: '24h' }).toString();
}

//overriding toJSON method of mongoose
UserSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    return _.pick(userObject, ['_id', 'nic', 'email', 'firstName', 'lastName', 'type'])
}

UserSchema.statics.findByToken = function (token) {
    const User = this
    let decoded

    try {
        decoded = jwt.verify(token, 'secret');
    } catch (e) {
        return Promise.reject(e)
    }

    return User.findOne({
        _id: decoded._id
    })
}

UserSchema.statics.findByCredentials = function (nic, password) {
    const User = this;

    return User.findOne({ nic }).then((user) => {
        if (!user) {
            return Promise.reject('Invalid nic');
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject('Invalid password');
                }
            })
        })
    })

}

//runs before save event occurs
UserSchema.pre('save', function (next) {
    const user = this

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = {
    User
}