const user = require("../models/user");

const createmany = async () => {
  try {
    const newuser = await user.create([
new user({ name: "Juan", age: 30, favoritesfood: ["pizza"] }),
new user ({ name: "Adam", age: 10, favoritesfood: ["pizza"] }),
new user({ name: "Mehdi", age: 40, favoritesfood:["pizza"] })
    ]);
   
  } catch (err) {
    console.log(err);
  }
};
module.exports = createmany;
