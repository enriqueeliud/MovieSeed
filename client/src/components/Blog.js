import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Typography,Button} from '@material-ui/core'
import{Link}from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { getAllBlogs } from '../actions/blogAction'

function Blog() {
  const dispatch = useDispatch();

  const blogstate = useSelector((state)=>state.blogReducer)
  const {blogs, error, loading} = blogstate

  useEffect(() =>{
    dispatch(getAllBlogs())
  }, [])

 return (
   <>
     <Link to="/blog/create">
       <Button variant="contained" color="secondary">
         Create new blog
       </Button>
     </Link>
     <div className="blog">
       <h3>Title</h3>
       <h3>Creator</h3>
       <h3>Content</h3>
       <h3>Created_at</h3>
       <h3>Likes</h3>
       { loading ? (
         <h1>loading...</h1>
       ) : error ? (
         <h1>something went wrong</h1>
       ) : (
         blogs.map((blog, index) => (
           <>
             <h2>{blog.Title}</h2>
             <h2>{blog.Creator}</h2>
             <h2>{blog.Body}</h2>
             <h2>{blog.Created_at}</h2>
             <h2>{blog.Likes}</h2>
           </>
         ))
       )}
     </div>
   </>
 );
}

export default Blog;
