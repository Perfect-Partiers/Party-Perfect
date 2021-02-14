const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
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
