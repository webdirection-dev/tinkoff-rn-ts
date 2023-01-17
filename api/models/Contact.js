const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    cardNumber: {type: String, required: true},
}, {timestamps: true})

module.exports = mongoose.model('Contact', ContactSchema)
