const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/LandChain" , { useNewUrlParser: true })

module.exports = {
    mongoose
}