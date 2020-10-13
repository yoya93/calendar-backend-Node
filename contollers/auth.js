const expess = require("express");
const Usuario = require("../models/Usuario");

const registerUser = async (req, res = expess.response) => {
  // const { name, email, password } = req.body;

  try {
    const usuario = new Usuario(req.body);

    await usuario.save();

    res.status(201).json({
      ok: true,
      msg: "register",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
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
