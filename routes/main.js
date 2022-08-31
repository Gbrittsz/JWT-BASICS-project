const express = require("express");
const {login, dashboard } = require('../controllers/main');
const authenticatioMiddleware = require('../middleware/auth');

const router = express.Router();

router.route("/login").post(login);

router.router("/dashboard").get(authenticatioMiddleware, dashboard);

module.exports = router
