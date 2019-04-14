const mongoose = require('mongoose');
const conf = require('../config/config.json');

mongoose.connect(conf.dbUrl);

module.exports = {
    mongoose
}