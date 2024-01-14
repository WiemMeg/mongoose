const user = require("../models/user");

const deleteusers = async () => {
  try {
    const result = await user.deleteMany({ name: "Juan" });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
module.exports = deleteusers;
