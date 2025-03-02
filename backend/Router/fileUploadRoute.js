const express = require('express');
const fileUploadController = require('../Controller/fileUploadController');

const router = express.Router();

router.route("/upload").post(fileUploadController.generatePresignedUrl);

module.exports = router;