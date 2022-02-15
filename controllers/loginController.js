const User = require("../models/").user;

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

};

module.exports = {
  loginUser
};
