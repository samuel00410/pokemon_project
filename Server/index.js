const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

mongoose
  .connect("mongodb://127.0.0.1:27017/pokemonDB")
  .then(() => {
    console.log("成功連接mongoDB");
  })
  .catch(() => {
    console.log(e);
  });

// 設定Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 設定routes
app.use("/auth", authRoutes); // 只要任何跟 /auth有關的這些route，都要使用authRoutes裡面的這些routes

app.get("/", (req, res) => {
  res.send("歡迎來到網站首頁。");
});

app.listen(8080, () => {
  console.log("伺服器正在監聽port 8080...");
});
