const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("saves a user", done => {
    const joe = new User({ name: "Joe" });

    // save in the database
    joe.save().then(() => {
      // Successfully
      assert(!joe.isNew);
      done();
    });
  });
});
