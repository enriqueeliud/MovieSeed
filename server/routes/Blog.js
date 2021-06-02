const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get("/blog", (req, res) => {
  Blog.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

router.post("/create", (req, res) => {
  const post =  new Blog(req.body)
     post.save((err,post)=>{
       if(err){
         res.send(err)
       } else {
         res.send(post)
       }
     })
});

router.get("/:id", (function (req, res) {
    let id = req.params.id;
    Blog.findById(id, function (err, todo) {
      res.json(todo);
    });
  }));

module.exports = router;