const express = require("express");

const getEvents = (req, res = express.response) => {
  res.status(200).json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = (req, res = express.response) => {
  console.log(req.body);

  res.status(200).json({
    ok: true,
    msg: "createEvent",
  });
};

const actEvents = (req, res = express.response) => {
  res.status(200).json({
    ok: true,
    msg: "actEvents",
  });
};

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
