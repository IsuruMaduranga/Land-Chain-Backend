const mongoose = require('mongoose');
const {User} = require('./models/user');
const readlineSync = require('readline-sync');

let db = readlineSync.question('db: ');
let nic = readlineSync.question('nic: ');
let firstName = readlineSync.question('firstname: ');
let lastName = readlineSync.question('lastname: ');
let email = readlineSync.question('email: ');
let password = readlineSync.question('password: ');
let type = "admin";

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, { useNewUrlParser: true })
    .then(() => {
        const user = new User({nic,firstName,lastName,email,password,type});
        user.save();
    }).then(()=>{
        console.log('done');
        process.exit();
    })
    .catch(e=>{
        console.log(e);
        process.exit();
    });


