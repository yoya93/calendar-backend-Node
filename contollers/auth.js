const expess = require("express");

const registerUser = (req, res = expess.response) => {
  console.log(req);

  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "error name",
    });
  }
  res.json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = expess.response) => {
  const { name, email } = req.body;

  res.json({
    ok: true,
    msg: "login",
    name,
    email,
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
