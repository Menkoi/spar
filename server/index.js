const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require("jsonwebtoken")
require('dotenv').config()

/* Middleware */
app.use(cors())
app.use(express.json())

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

app.post('/api/Login', async (req, res) => {
        const user = await User.findOne({
            name: req.body.name,
            password: req.body.password,
        })

        if(user) {
            const token = jwt.sign(
                {
                name: user.name,
                email: user.email,
                }, `${jwt_token}`
            )

            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
})

app.listen(1337, () => {
    console.log('server started on 1337')
})