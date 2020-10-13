const express = require("express");
const Evento = require("../models/Evento");

// Obtener eventos
const getEvents = async (req, res = express.response) => {
  const events = await Evento.find().populate("user", "name"); //abre la referencia al user y solo quiero ver el name

  try {
    res.status(200).json({
      ok: true,
      events: events,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

// Crear un nuevo evento
const createEvent = async (req, res = express.response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventGuardado = await evento.save();

    return res.status(200).json({
      ok: true,
      event: eventGuardado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }

  res.status(200).json({
    ok: true,
    msg: "createEvent",
  });
};

//Actualizar un evento
const actEvents = (req, res = express.response) => {
  res.status(200).json({
    ok: true,
    msg: "actEvents",
  });
};

//Borrar un evento
const deleteEvents = (req, res = express.response) => {
  res.status(200).json({
    ok: true,
    msg: "deleteEvents",
  });
};

module.exports = {
  getEvents,
  createEvent,
  actEvents,
  deleteEvents,
};
