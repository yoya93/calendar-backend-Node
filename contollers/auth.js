const expess = require("express");

const registerUser = (req, res = expess.response) => {
  const { name, email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = expess.response) => {
  const { name, email } = req.body;

  res.status(200).json({
    ok: true,
    msg: "login",
    name,
    email,
  });
};

const renewToken = (req, res = expess.response) => {
  res.status(200).json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  registerUser,
  renewToken,
  loginUser,
};
