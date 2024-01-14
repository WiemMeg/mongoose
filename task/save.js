const user = require("../models/user");

const create = async () => {
  try {
    const newuser = new user({
      name: "Juan",
      age: 30,
      favoritesfood: ["pizza"],
    });
    await newuser.save();
  } catch (err) {
    console.log(err);
  }
};
module.exports = create;
