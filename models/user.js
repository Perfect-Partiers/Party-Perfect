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
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      ({ length }) => length >= 6,
      "Password should be at least 6 characters.",
    ],
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
