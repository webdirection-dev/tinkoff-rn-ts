const router = require('express').Router()
const User = require('../models/User')
const { verifyTokenAndAuthorisation, verifyTokenAndAdmin} = require('./verifyToken')
const CryptoJS = require('crypto-js')

//UPDATE USER
router.put(
    '/:id',
    verifyTokenAndAuthorisation, //middleware
    async (req, res) => {
        //закриптуем новый пароль с клиента если его хотят обновить
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET).toString()
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, //поиск по id
                {$set: req.body}, //заменить найденное на req.body
                {new: true}, //отправить клиенту обновленные данные
            )

            res.status(200).json(updatedUser)
        } catch (err) { res.status(500).json(err) }
    }
)

//DELETE USER
router.delete(
    '/:id',
    verifyTokenAndAdmin, //middleware
    async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User has been deleted.')
        } catch (err) { res.status(500).json(err) }
    }
)

//GET USER
router.get(
    '/find/:id',
    verifyTokenAndAuthorisation, //middleware
    async (req, res) => {
        try {
            const user  = await User.findById(req.params.id)
            const {password, ...others} = user._doc
            res.status(200).json(others)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET ALL USERS
router.get(
    '/',
    verifyTokenAndAuthorisation, //middleware
    async (req, res) => {
        const query = req.query.new

        try {
            const users = query ?
                await User.find().limit(5).sort({_id: -1}) :
                await User.find()

            res.status(200).json(users)
        } catch (err) { res.status(500).json(err) }
    }
)

module.exports = router
