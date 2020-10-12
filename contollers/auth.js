const expess = require("express");

const registerUser = (req, res = expess.response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

const loginUser = (req, res = expess.response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const renewToken = (req, res = expess.response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  registerUser,
  renewToken,
  loginUser,
};
