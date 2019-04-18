const mongoose = require('mongoose');

const {User} = require('./models/user');
const readlineSync = require('readline-sync');


let db = readlineSync.question('db: ');
let password = readlineSync.question('password: ');


mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, { useNewUrlParser: true })
    .then(() => { console.log('db connected')});
       
const user = new User({nic:"000000000V",firstName:"admin",lastName:"admin",email:"admin@landchain.com",password,type:"admin"});
user.save()
    .then(()=>{
        console.log('done');
        process.exit();
    })
    .catch(e=>{
        console.log(e);
        process.exit();
    });


