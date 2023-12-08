const express = require("express");
const router = express.Router();

const newsCommand = require("../controllers/newsCommandController");
const newsQuery = require("../controllers/newsQueryController");

router.post("/", newsCommand.createNews);
router.get("/", newsQuery.getAllNews);
router.delete('/', newsCommand.deleteAllNews);

module.exports = router;
