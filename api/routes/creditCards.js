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

//GET CARDS
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
            const card  = await CreditCard.findByIdAndDelete(req.params.id)
            res.status(200).json('Credit Card has been deleted.')
        } catch (err) { res.status(500).json(err) }
    }
)

//UPDATE USER
// router.put(
//     '/:id',
//     verifyTokenAndAuthorisation, //middleware
//     async (req, res) => {
//         //закриптуем новый пароль с клиента если его хотят обновить
//         if (req.body.password) {
//             req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET).toString()
//         }
//
//         try {
//             const updatedUser = await User.findByIdAndUpdate(
//                 req.params.id, //поиск по id
//                 {$set: req.body}, //заменить найденное на req.body
//                 {new: true}, //отправить клиенту обновленные данные
//             )
//
//             const accessToken = jwt.sign(
//                 {id: updatedUser._id, isAdmin: updatedUser.isAdmin},
//                 process.env.JWT_SECRET,
//                 {expiresIn: '3d'}
//             )
//
//             res.status(201).json({...updatedUser._doc, accessToken})
//         } catch (err) { res.status(500).json(err) }
//     }
// )

module.exports = router
