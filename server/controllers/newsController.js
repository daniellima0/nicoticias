const News = require("../models/news");

exports.createNews = async (req, res) => {
  console.log(req.body);
  try {
    const news = new News(req.body);
    const savedNews = await news.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAllNews = async (req, res) => {
  try {
    await News.deleteMany({});
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
