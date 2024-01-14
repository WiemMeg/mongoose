const user = require("../models/user");

const findfood = async () => {
  try {
    const oneuser = await user.findOne({ favoritesfood: "pizza" });
    console.log(oneuser);
  } catch (err) {
    console.log(err);
  }
};
module.exports = findfood;
