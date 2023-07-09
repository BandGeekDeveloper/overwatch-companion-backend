const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const affiliationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
    location: {
        type: String,
},
    leader: {
        type: String,
    }
});

module.exports = mongoose.model("Affiliation", affiliationSchema);
