const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Wow😲!!...DB Connected successfully💪');
    } catch (error) {
        console.log('Damn😞!!...DB Connection failed!!🙆‍♂️', error.message)
    }
}

dbConnect()