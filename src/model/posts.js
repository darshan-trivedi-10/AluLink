import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    like: {
        type: Number
    },
    companyName: {
        type: String
    },
    jobTitle: {
        type: String
    },
    jobLink: {
        type: String
    },
    comment: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const post = mongoose.model('post', postSchema);

export default post;