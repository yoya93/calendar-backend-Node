//   Rutas de Events / events
//   host + /api/events

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const {
  getEvents,
  createEvent,
  actEvents,
  deleteEvents,
} = require("../contollers/events");
const { validarCampos } = require("../middelewares/validar-campos");
const { validarJWT } = require("../middelewares/validar-jwt");
const { isDate } = require("../helpers/isDate");

//Todos tienen que pasar por la validacion del JWT
router.use(validarJWT);

// Obtener eventos
router.get("/", getEvents);
// Crear un nuevo evento
router.post(
  "/",
  [
    //middlewares
    check("title", "El title es obligatorio").not().isEmpty(),
    check("start", "El tiempo de inicio es obligatorio").custom(isDate),
    check("end", "El tiempo de finalizacion es obligatorio").custom(isDate),

    validarCampos,
  ],
  createEvent
);
//Actualizar un evento
router.put("/:id", actEvents);
//Borrar un evento
router.delete("/:id", deleteEvents);

module.exports = router;
