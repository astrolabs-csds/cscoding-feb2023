// 1. Import mongoose
const mongoose = require('mongoose');

// 2. Create the Schema
const UserSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
        dob: {
            type: Date,
            required: false
        },
        avatar: {
            type: String,
            required: false    
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        }
});

// 3. Create the Model
const UserModel = mongoose.model('users', UserSchema);

// 4. Export the Model
module.exports = UserModel;