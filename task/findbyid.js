const user = require("../models/user");

const findbyid = async () => {
  try {
    const oneuser = await user.findById("65a3aeca26f0fcdb9aaaa852");
    console.log(oneuser);
  } catch (err) {
    console.log(err);
  }
};
module.exports = findbyid;
