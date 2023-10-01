const express = require("express");
const router = express.Router();
const { getBlogs } = require("../controllers/blogsController");

router.get("/blog-stats", getBlogs);
router.get("/blog-search", getBlogs);

module.exports = router;
