const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("正在接受一個跟auth有關的請求");
  next();
});

// 使用者註冊
router.post("/register", async (req, res) => {
  // 驗證使用者資料是否符合規範
  let { error } = registerValidation(req.body);
  // 如果有輸入格式錯誤的話，就回傳錯誤訊息給使用者
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let { username, email, password } = req.body;
  try {
    // 確認是否有相同的信箱
    let emailExist = await User.findOne({ email }).exec();
    if (emailExist) {
      res.status(400).send("此信箱已被註冊過了");
    }

    // 幫密碼做雜湊和加鹽
    let hashValue = await bcrypt.hash(password, 12);

    // 儲存使用者
    let newUser = new User({
      username,
      email,
      password: hashValue,
    });

    savedUser = await newUser.save();
    return res.send({ msg: "註冊成功!", savedUser });
  } catch (e) {
    return res.status(500).send("無法儲存使用者。。。");
  }
});

// 使用者登入
router.post("/login", async (req, res) => {
  // 驗證資料是否符合規範
  let { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let { email, password } = req.body;
  try {
    // 查看信箱是否有重複
    let foundUser = await User.findOne({ email }).exec();
    // 如果沒有找到該信箱的話
    if (!foundUser) {
      return res.status(401).send("無法找到使用者，請確認信箱是否正確");
    }
    // 確認使用者給的密碼與資料庫內儲存的Bcrypt雜湊值是否相同
    let result = await bcrypt.compare(password, foundUser.password);
    // 如果核對成功的話
    if (result) {
      // 製作json web token
      let tokenObject = { _id: foundUser._id, email: foundUser.email };
      let token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET); // 把使用者的資訊把它拿去做簽名
      return res.send({
        msg: "登入成功",
        token: "JWT " + token,
        user: foundUser,
      });
    } else {
      return res.status(401).send("密碼錯誤");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
