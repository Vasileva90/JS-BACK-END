const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name should be at least 2 characters'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
        match: [/^https?:\/\//, 'Invalid URL'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age should be at least 1'],
        max: [100, 'Age should be no longer than 100'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLenght: [5, 'Description should be at least 5 characters'],
        maxLength: [50, 'Description should be no longer than 50 characters'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minLenght: [5, 'Description should be at least 5 characters'],
        maxLength: [50, 'Description should be no longer than 5 characters'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'User',
            },
            message: {
                type: String,
                required: [true, 'Comment message is required']
            }
        }
    ]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;