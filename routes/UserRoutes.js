const express = require("express");
const router = express.Router();
const Reviews = require('../models/Reviews')

router.get("/users", (req, res) => {
  Reviews.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

module.exports = router;