const mongoose = require('mongoose')

const dbConnect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db connected successfully");

    } catch (error) {
        console.log("Failed to connect database");

    }
}

export default dbConnect
