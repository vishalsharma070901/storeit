const express = require('express');
const fileHandelingController = require('../Controller/FileHandlingController');
const { route } = require('./authRoute');

const router = express.Router();

router.route("/get-presigned-url/:key").get(fileHandelingController.getObject);
router.route("/get-objects/:folder/:subfolder").get(fileHandelingController.listObjectsInFolder);
router.route("/get-all-objects/:folder").get(fileHandelingController.LisAllObjects);
router.route("/delete-object/:folder/:subfolder/:key").delete(fileHandelingController.deleteObject);


module.exports = router;