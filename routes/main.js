const express = require("express");
const router = express.Router();
const {mainController, useShortUrl, deleteUrl} = require("../controllers/home");

router.route('/').get(mainController);
router.route('/:shortUrl').get(useShortUrl).post(deleteUrl);

module.exports = router;