const user = require("../models/user");

const findusers = async () => {
  try {
    const oneuser = await user.find({ name: "Juan" });
    console.log(oneuser);
  } catch (err) {
    console.log(err);
  }
};
module.exports = findusers;
