const mongoose = require('mongoose');

// Declare the Schema of the User model
const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
    credits : {
        type : Number,
        default : 100,
    },
    Billboard: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Billboard',
        }
    ],
});

//Export the model
module.exports = mongoose.model('User', userSchema);