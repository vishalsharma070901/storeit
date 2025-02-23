const express = require("express");
const authControllers = require("../Controller/authController");
const router = express.Router();
const authMiddleware = require("../MiddleWare/authMiddleWare");

router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/otp-verification").post(authControllers.otpVerification);
router.route("/user").get(authMiddleware,authControllers.user);

module.exports = router;
