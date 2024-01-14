const user = require("../models/user");

const update = async () => {
  try {
    const oneuser = await user.findOneAndUpdate({ name: "Juan" }, { age: 20 });
    console.log(oneuser);
  } catch (err) {
    console.log(err);
  }
};
module.exports = update;
