const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const cafeRouter = require('./routes/cafeRoutes')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/cafes", cafeRouter)

app.get('/', (_, res) => {
    res.send('<h1>Cafes API</h1><a href="/api/cafes">/api/cafes</a>')
})

mongoose.connect(process.env.ATLAS_URI).then(() => console.log('conected'))

module.exports = app