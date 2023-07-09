const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loreVideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    link: {
        type: String
    }

});

module.exports = mongoose.model("LoreVideo", loreVideoSchema);
