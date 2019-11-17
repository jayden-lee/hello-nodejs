var express = require("express");
var User = require("../schemas/user");

var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  // User.find({}).then(users => {
  //   res.render('mongoose', {users});
  // })
  // .catch((err) => {
  //   console.error(err);
  //   next(err);
  // });
  try {
    const users = await User.find();
    res.render("mongoose", { users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
