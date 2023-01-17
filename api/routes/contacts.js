const router = require('express').Router()
const Contact = require('../models/Contact')

//CREATE CONTACT
router.post(
    '/', async (req, res) => {
        const newContact = new Contact({
            username: req.body.username,
            cardNumber: req.body.cardNumber,
        })

        try {
            const out = await newContact.save()
            res.status(201).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET ALL CONTACTS
router.get('/', async (req, res) => {
        try {
            const out = await Contact.find()
            res.status(200).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET CONTACT WITHOUT CURRENT USER
router.get('/without/:username', async (req, res) => {
        try {
            const out  = await Contact.find( {username: {$ne: req.params.username}} )
            res.status(200).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET CONTACT
router.get('/find/:id', async (req, res) => {
        try {
            const out  = await Contact.findById(req.params.id)
            res.status(200).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

//DELETE CONTACT
router.delete('/:id', async (req, res) => {
        try {
            await Contact.findByIdAndDelete(req.params.id)
            res.status(200).json('Contact has been deleted.')
        } catch (err) { res.status(500).json(err) }
    }
)

module.exports = router
