const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

before(() => {
  // Create a new database
  mongoose.connect("mongodb://localhost/user_test");

  mongoose.connection
    .once("open", () => console.log("Good to go!"))
    .on("error", err => console.log("Error", err));
});

beforeEach(done => {
  // Clear the data
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
