const mongoose = require('mongoose')

function connectDB() {
    try {
        return mongoose.connect(process.env.VITE_MONGO_URL)
        
    } catch (error) {
        throw error
    }
}

module.exports = connectDB;

