const app = require("./index");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3500;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Data base running on ${PORT}`);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
})