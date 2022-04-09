const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require("jsonwebtoken")
require('dotenv').config()

/* Middleware */
app.use(express.json())
app.use(cors())

const api_key = process.env.API_KEY;
const jwt_token = process.env.JWT_TOKEN;

mongoose.connect(`mongodb+srv://${api_key}`)

app.post('/api/register', async (req, res) => {
    try {
         await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
       res.json({ status: 'ok'})
    } catch(err) {
        res.json({ status: 'error', error: 'Duplicate email'})
        alert('Duplicate Information')
    }
})

app.post('/api/login', async (req, res) => {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        if(user) {
            const token = jwt.sign(
                {
                password: user.password,
                email: user.email,
                }, `${jwt_token}`
            )

            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
})

app.get('/api/login', async (req, res) => {

    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, `${jwt.token}`)
        const email = decoded.email
        const user = await User.findOne({ email: email })
        return {status: 'ok', quote:user.quote}
    } catch(error) {
        console.log(error)
        res.json({status: 'error', error: 'invaild token' })
    }
})

app.listen(1337, () => {
    console.log('server started on 1337')
})