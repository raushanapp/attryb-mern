const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = () => {
    return mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};
module.exports = connectDB;