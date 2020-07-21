const express = require("express");

const app = express();

app.use(express.static("./dist/breakingBad"));

app.get("/*", function (req, res) {
  console.log(`server running ${process.env.PORT}`);
  res.sendFile("index.html", { root: "./dist/breakingBad" });
});

app.listen(process.env.PORT || 8080);
