const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.listen(3000, () => {
  console.log("3000 端口启动");
});
