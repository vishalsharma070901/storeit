const express = require("express");
const authControllers = require("../Controller/authController");
const router = express.Router();

router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/otp-verification").post(authControllers.otpVerification);

module.exports = router;
