const mongoose = require('mongoose');
const config = require('config');

module.exports = function(){
    mongoose.connect(config.get('db'),{ useNewUrlParser: true })
    .then(() => { });
}