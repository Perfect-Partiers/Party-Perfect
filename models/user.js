const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  uid: {
    type: String,
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
