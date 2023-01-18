const router = require('express').Router()
const CreditCard = require('../models/CreditCard')
const { verifyTokenAndAuthorisation, verifyTokenAndAdmin} = require('./verifyToken')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//CREATE CARD
router.post(
    '/', async (req, res) => {
        const newCard = new CreditCard({
            userId: req.body.userId,
            cardName: req.body.cardName,
            currency: req.body.currency,
            cardNumber: req.body.cardNumber,
        })

        try {
            const savedCard = await newCard.save()
            res.status(201).json(savedCard)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET ALL CARDS
router.get('/', async (req, res) => {
        try {
            const cards = await CreditCard.find()
            res.status(200).json(cards)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET MY CARDS
router.get('/my-cards/:id', async (req, res) => {
        try {
            const card  = await CreditCard.find({'userId': req.params.id})
            res.status(200).json(card)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET CARD
router.get('/find/:id', async (req, res) => {
        try {
            const card  = await CreditCard.findById(req.params.id)
            res.status(200).json(card)
        } catch (err) { res.status(500).json(err) }
    }
)

//DELETE CARDS
router.delete('/:id', async (req, res) => {
        try {
            await CreditCard.findByIdAndDelete(req.params.id)
            res.status(200).json('Credit Card has been deleted.')
        } catch (err) { res.status(500).json(err) }
    }
)

//TRANSFER CARDS
router.put(
    '/transfer',
    // verifyTokenAndAuthorisation, //middleware
    async (req, res) => {
        const {writeoff, writeon, amount} = req.body

        try {
            const successTransfer = await CreditCard.findOneAndUpdate(
                {_id: writeoff, balance: {$gte: amount}},
                {$inc: {balance: -amount}},
                {new: true},
            )

            if (successTransfer) {
                await CreditCard.findByIdAndUpdate( writeon, {$inc: {balance: amount}},  {new: true} )
                res.status(201).json('The transfer was successful!')
            } else res.status(405).json('Don`t have enough funds!')
        } catch (err) { res.status(500).json(err) }
    }
)

module.exports = router
