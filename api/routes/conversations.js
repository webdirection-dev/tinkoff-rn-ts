const router = require('express').Router()
const Conversation = require('../models/Conversation')

//CREATE CONVERSATION
router.post(
    '/', async (req, res) => {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
        })

        try {
            const out = await newConversation.save()
            res.status(201).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

// //GET CONVERSATION OF A USER
router.get('/:userId', async (req, res) => {
        try {
            const out = await Conversation.find({members: {$in: [req.params.userId]}})
            res.status(200).json(out)
        } catch (err) { res.status(500).json(err) }
    }
)

module.exports = router
