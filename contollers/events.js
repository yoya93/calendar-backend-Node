const express = require("express");

// Obtener eventos
const getEvents = (req, res = express.response) => {
  res.status(200).json({
    ok: true,
    msg: "getEvents",
  });
};

// Crear un nuevo evento
const createEvent = (req, res = express.response) => {
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
