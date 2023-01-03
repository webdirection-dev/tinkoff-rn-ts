const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const mongoSetting = {useNewUrlParser: true, useUnifiedTopology: true}
const app = express()
app.use(cors())
dotenv.config()

const authRoot = require('./routes/auth')
const userRoot = require('./routes/users')
const creditCards = require('./routes/creditCards')

// console.log('test')

mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_URL, mongoSetting)
    .then(() => console.log('DB Connection Success!'))
    .catch(err => console.error(err))

app.use(express.json())
app.use('/api/auth', authRoot)
app.use('/api/users', userRoot)
app.use('/api/cards', creditCards)

app.listen(process.env.PORT || 8008, () => {console.log('Backend Server Is Running!')})
