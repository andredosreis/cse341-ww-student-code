const mongoose = require('mongoose');

const connectToDb = () => { // Corrected the function name
    mongoose.connect(
        "mongodb+srv://root:admin@week01.pq43d.mongodb.net/?retryWrites=true&w=majority&appName=week01", // Added a comma
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log('DB connected');
    }).catch((err) => {
        console.log(err);
    });
};
module.exports = connectToDb; // Corrected the function name