const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    label: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Role", roleSchema);
