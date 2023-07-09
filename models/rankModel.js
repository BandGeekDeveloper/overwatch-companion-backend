const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankSchema = new Schema({
    label:{
        type: 'string',
        required: true,
    }
})

module.exports = mongoose.model("Rank", rankSchema);
