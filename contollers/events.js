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
// si el formato del id no coincide se dispara el catch directamente (caracteristica de mongoDb)
const actEvents = async (req, res = express.response) => {
  const eventId = req.params.id; //Obtengo el id de la url
  const uid = req.uid;

  try {
    const event = await Evento.findById(eventId); //lo trae dew la BD

    if (!event) {
      res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese ID",
      });
    }

    if (event.user.toString() !== uid) {
      console.log(uid);
      console.log(event.user.toString());

      res.status(401).json({
        ok: false,
        msg: "El user no tiene ese privilegio",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventActualizado = await Evento.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    console.log(eventActualizado);

    res.status(200).json({
      ok: true,
      eventId: eventActualizado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
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
