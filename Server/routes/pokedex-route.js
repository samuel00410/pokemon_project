const express = require("express");
const router = express.Router();
const User = require("../models/user-model");

router.use((req, res, next) => {
  console.log("正在接受一個跟pokedex有關的請求");
  next();
});

router.get("/", (req, res) => {
  return res.send("歡迎來到pokemon網站");
});

module.exports = router;
