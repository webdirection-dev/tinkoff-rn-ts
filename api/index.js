const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const mongoSetting = {useNewUrlParser: true, useUnifiedTopology: true}
const app = express()

mongoose.set('strictQuery', true)
dotenv.config()
app.use(cors())

const authRoot = require('./routes/auth')
const userRoot = require('./routes/users')
const creditCardsRoot = require('./routes/creditCards')
const contactsRoot = require('./routes/contacts')
const conversationsRoot = require('./routes/conversations')
const messagesRoot = require('./routes/messages')

// console.log('test')
mongoose
    .connect(process.env.MONGO_URL, mongoSetting)
    .then(() => console.log('DB Connection Success!'))
    .catch(err => console.error(err))

app.use(express.json())
app.use('/api/auth', authRoot)
app.use('/api/users', userRoot)
app.use('/api/cards', creditCardsRoot)
app.use('/api/contacts', contactsRoot)
app.use('/api/conversations', conversationsRoot)
app.use('/api/messages', messagesRoot)

app.listen(process.env.PORT || 8008, () => {console.log('Backend Server Is Running!')})
