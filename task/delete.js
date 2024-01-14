const user = require("../models/user");

const deleteuser = async () => {
  try {
    const result = await user.findByIdAndDelete("65a3aeca26f0fcdb9aaaa854");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
module.exports = deleteuser;
