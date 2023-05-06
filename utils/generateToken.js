const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '7d' })
 
}

module.exports = generateToken;