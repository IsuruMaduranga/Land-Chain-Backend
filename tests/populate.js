const mongoose = require('mongoose');

const { User } = require('../models/user');
const { Ad } = require('../models/ad');

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, { useNewUrlParser: true })
    .then(() => { console.log('db connected') });

const admin = new User({ nic: "000000000V", firstName: "admin", lastName: "admin", email: "admin@landchain.com", password: "123456", type: "admin" });
admin.save()
    .catch(e => {
        console.log(e);
        process.exit();
    });

const user = new User({ nic: "111111111V", firstName: "user", lastName: "user", email: "user@landchain.com", password: "123456", type: "user" });
admin.save()
    .catch(e => {
        console.log(e);
        process.exit();
    });

