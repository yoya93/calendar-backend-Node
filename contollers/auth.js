const express = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/Usuario");

const registerUser = async (req, res = express.response) => {
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

const loginUser = async (req, res = express.response) => {
  const { name, password, email } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "usuario no existe con este correo",
      });
    }

    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password Incorrect",
      });
    }

    // Generar JWT

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

const renewToken = (req, res = express.response) => {
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
