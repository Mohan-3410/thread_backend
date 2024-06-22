const mongoose = require('mongoose')

module.exports = async () => {
    const url = `mongodb+srv://${process.env.MONGOOSE_ID}:${process.env.MONGOOSE_PASSWORD}@cluster0.3r80h15.mongodb.net/threads?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url);
        console.log(`mongodb connected at ${mongoose.connection.host}: ${mongoose.connection.port}`)
    } catch (e) {
        console.log("connection error", e.message)
        process.exit(1);
    }
}