const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    unique: true,
  },
  lastName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  uid: {
    type: Number,
  },
  parties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Party",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
