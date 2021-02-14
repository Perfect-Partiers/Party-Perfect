const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partySchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  address: { type: String, required: true },
  attendees: [
    {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  ],
  supplies: [
    {
      supply: {
        type: String,
      },
      checked: {
        type: Boolean,
        default: false,
      },
    },
  ],
  schedule: [
    {
      time: { type: String },
      activity: { type: String },
    },
  ],
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
