const user = require("../models/user");

const queryChain = async () => {
  try {
    const user2 = await user
      .find({ favoritesfood: "pizza" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age")
      .exec();
    console.log(user2);
  } catch (error) {
    console.log(error);
  }
};
module.exports = queryChain;
