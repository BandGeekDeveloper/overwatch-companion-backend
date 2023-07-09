const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const heroSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    codeName: {
        type: String,
        required: true,
    },
    birthPlace: {
        type: String,
        required: false
    },
    homeBase: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    height: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    backstory: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    healthPoints: {
        type: Number,
        required: true
    },
    armor: {
        type: Number,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model("Hero", heroSchema);
