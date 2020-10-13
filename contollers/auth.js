const expess = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/Usuario");

const registerUser = async (req, res = expess.response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con este correo",
      });
    }

    usuario = new Usuario(req.body);

    // Encriptar contraseña

    const salt = bcrypt.genSaltSync(); //semilla de encrip
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
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
