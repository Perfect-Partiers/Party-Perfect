const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partySchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  address: { type: String, required: true },
  attendees: { type: Number },
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
