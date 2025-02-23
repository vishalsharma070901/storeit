const express = require("express");
const User = require("../Modal/UserModal");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("./env");

const register = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });
    const usernameExist = await User.findOne({ username });

    if (usernameExist) {
      return res.status(409).json({ extraDetails: "Username already exist" });
    }

    if (userExist) {
      return res.status(409).json({ extraDetails: "Email already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration Sucessfull",
      createUser,
      token: await createUser.generateToken(),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
});

const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email });
    console.log(emailExist);
    if (!emailExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, emailExist.password);

    if (isPasswordValid) {
      res.status(201).json({
        extraDetails: "Login Sucessfull",
        token: await emailExist.generateToken(),
        userId: emailExist._id.toString(),
        
      });
    } else {
      res.status(400).json({ extraDetails: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
});

const otpVerification = asyncHandler(async (req, res) => {
  try {
    const { username, email } = req.body;

    const generateRandomFourDigit = () => {
      return Math.floor(1000 + Math.random() * 9000);
    };

    const otp = generateRandomFourDigit(); 

    const text = `Hi ${username},
  
  Thank you for choosing StoreIt! We're almost there.
  
  To complete your registration, please use the One-Time Password (OTP) below:
  Your OTP: ${otp}
  
  This OTP is valid for the next 10 minutes. If you didn’t request an OTP, please ignore this message.
  
  If you need any help, feel free to reach out to us at support@storeit.com.
  
  Thank you,  
  The StoreIt Team`;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    let message = {
      from: {
        name: "StoreIt",
        address: EMAIL,
      },
      to: email,
      subject: "One Time Password for Registration",
      text: text,
    };

    const info = await transporter.sendMail(message);

    return res.status(200).json({
      msg: "Successfully sent mail",
      otp,
      info: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

const user = asyncHandler(async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json(userData);
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
});;


module.exports = { register, login, otpVerification, user };
