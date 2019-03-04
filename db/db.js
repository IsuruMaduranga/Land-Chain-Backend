const mongoose = require('mongoose');
const config = require('../config/config.json');

mongoose.connect( config.dbUrl , { useNewUrlParser: true });

module.exports = {
    mongoose
}