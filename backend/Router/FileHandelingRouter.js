const express = require('express');
const { getObject } = require('../Controller/FileHandlingController');

const router = express.Router();

router.get('/get-presigned-url/:key', getObject);

module.exports = router;