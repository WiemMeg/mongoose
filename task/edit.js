const user = require("../models/user");

const edit = async () => {
  try {
    const edituser = await user.findById("65a3aeca26f0fcdb9aaaa852")
    edituser.favoritesfood.push("hamburger");
    edituser.save
    console.log(edituser);
  } catch (err) {
    console.log(err);
  }
};
module.exports = edit;
