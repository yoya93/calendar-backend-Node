//   Rutas de Usuarios / Auth
//   host + /api/auth

const { Router } = require("express");
const router = Router();

const { check } = require("express-validator");

const { registerUser, loginUser, renewToken } = require("../contollers/auth");
const { validarCampos } = require("../middelewares/validar-campos");

router.post(
  "/new",
  [
    //middlewares
    check("name", "El name es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
    check("password", "El password debe tener al menos 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  registerUser
);
router.post(
  "/",
  [
    check("email", "El email no es valido").isEmail(),
    check("password", "El password debe tener al menos 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUser
);

router.get("/renew", renewToken);

module.exports = router;
