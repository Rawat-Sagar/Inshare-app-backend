require('dotenv').config();
const MongoClient = require('mongoose');


function connectDB() {
    // Database Connection
    MongoClient.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });

    const connection = MongoClient.connection;

    connection.once('open', () => {
        console.log("DataBase Connected");
    }).catch(err => {
        console.log("Connection Failed");
    });
}

module.exports = connectDB;
