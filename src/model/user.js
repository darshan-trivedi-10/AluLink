import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    colleges: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization'
        }
    ]
});

const user = mongoose.model('user', userSchema);

export default user;

