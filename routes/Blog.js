const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get("/getallblogs", async(req, res) => {
 try  {
    const blogs = await Blog.find({})
    res.send(blogs)
 } catch (error) {
   return res.status(400).json({message:error})
 }
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