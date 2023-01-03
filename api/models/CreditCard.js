const mongoose = require('mongoose')

const CreditCardSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    cardName: {type: String, required: true},
    currency: {type: String, required: true},
    cardNumber: {type: String, required: true, unique: true},
    balance: {type: Number, default: 0},
}, {timestamps: true})

module.exports = mongoose.model('CreditCard', CreditCardSchema)
