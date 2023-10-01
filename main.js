const express = require("express");
const bodyparser = require("body-parser");
const BlogRouter = require("./routes/blogsRoutes");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api", BlogRouter);

app.listen(5000, () => {
  console.log("server is started");
});
