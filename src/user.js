const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// The properties and the data type
const UserSchema = new Schema({
  name: String
});

// Create the collection user
const User = mongoose.model("user", UserSchema);

// Make visible by other files
module.exports = User;
