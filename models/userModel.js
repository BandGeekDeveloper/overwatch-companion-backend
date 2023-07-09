const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: function(password){
            const hashedPassword = bcrypt.hashSync(password, 10);
            return hashedPassword; 
        }
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);

