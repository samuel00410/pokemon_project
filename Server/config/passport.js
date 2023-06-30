const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("../models/user-model");

// 直接return 一個 function，參數就是passport這個套件
module.exports = (passport) => {
  // 開始使用JWT的Strategy
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt"); // 從request 的 header: Authorized 裡面獲取JWT
  opts.secretOrKey = process.env.PASSPORT_SECRET;

  // 使用 JWT 策略
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      console.log("進入 JWT 的工作階段。。。");
      console.log(jwt_payload);
      let foundUser = User.findOne({ _id: jwt_payload._id }).exec(); // 透過jwt_payload裡面給的資訊找說這個User是誰
      try {
        if (foundUser) {
          return done(null, foundUser); // 把 req.user 屬性的值設定成 foundUser
        } else {
          return done(null, false);
        }
      } catch (e) {
        return done(e, false);
      }
    })
  );
};
