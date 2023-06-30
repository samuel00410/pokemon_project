const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const pokedexRoute = require("./routes/pokedex-route");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();
require("./config/passport")(passport);

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
app.use("/api/auth", authRoute); // 只要任何跟 /auth有關的這些route，都要使用authRoutes裡面的這些routes
// pokedex route 應該被jwt保護
// 如果request header內部沒有jwt，則request就會被視為是unauthorized
app.use(
  "/api/pokedex",
  passport.authenticate("jwt", { session: false }),
  pokedexRoute
);

app.listen(8080, () => {
  console.log("伺服器正在監聽port 8080...");
});
