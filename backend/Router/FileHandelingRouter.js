const express = require('express');
const fileHandelingController = require('../Controller/FileHandlingController');

const router = express.Router();

router.route("/get-presigned-url/:key").get(fileHandelingController.getObject);
router.route("/get-objects/:folder/:subfolder").get(fileHandelingController.listObjectsInFolder);


module.exports = router;