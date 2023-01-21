const router = require('express').Router()
const Message = require('../models/Message')

//CREATE MESSAGE
router.post(
    '/', async (req, res) => {
        const newMessage = new Message(req.body)

        try {
            const out = await newMessage.save()
            res.status(201).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

//GET MESSAGES OF USER
router.get(
    '/:conversationId', async (req, res) => {
        try {
            const out = await Message.find({conversationId: req.params.conversationId})
            res.status(201).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

module.exports = router
