//   Rutas de Usuarios / Auth
//   host + /api/auth

const { Router } = require("express");
const router = Router();

const { registerUser, loginUser, renewToken } = require("../contollers/auth");

router.post("/new", registerUser);
router.post("/", loginUser);

router.get("/renew", renewToken);

module.exports = router;
