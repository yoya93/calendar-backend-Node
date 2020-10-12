const expess = require("express");
const { validationResult } = require("express-validator");

const registerUser = (req, res = expess.response) => {
  const { name, email, password } = req.body;

  //Manejo de errores
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
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

  //Manejo de errores
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
