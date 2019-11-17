var express = require("express");
var Comment = require("../schemas/comment");

var router = express.Router();

/* GET get comment */
router.get("/:id", async (req, res, next) => {
  try {
    const comments = await Comment.find({ commenter: req.params.id }).populate(
      "commenter"
    );
    console.log(comments);
    res.json(comments);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/* POST create comment */
router.post("/", async (req, res, next) => {
  try {
    const comment = new Comment({
      commenter: req.body.id,
      comment: req.body.commnet
    });
    const savedComemnt = await comment.save();
    console.log(savedComemnt);
    const result = await Comment.populate(savedComemnt, { path: "commenter" });
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/* PATCH update comment */
router.patch("/:id", async (req, res, next) => {
  try {
    const result = await Comment.update(
      { _id: req.params.id },
      { comment: req.body.comment }
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/* DELETE delete comment */
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Comment.remove({ _id: req.params.id });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
