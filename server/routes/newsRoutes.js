const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.post("/", newsController.createNews);
router.get("/", newsController.getAllNews);
router.delete('/', newsController.deleteAllNews);

module.exports = router;
