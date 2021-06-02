import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Typography,Button} from '@material-ui/core'
import{Link}from 'react-router-dom';

function Blog() {

  const[blog,setBlog] = useState([]);
  const blogurl = "/blog/blog";

  useEffect(async()=>{
    getBlogPosts();
  },[])
  const getBlogPosts = async()=>{
   const response = await fetch(blogurl)
   const responsejson = await response.json()
   setBlog(responsejson)
  }

 return (
   <>
     <h1>Blog Posts</h1>
     <Link to="/blog/create">
       <Button
       variant="contained"
       color="secondary"
       >
         Create new blog
       </Button>
      </Link>
     <div className="blog">
       <h3>Title</h3>
       <h3>Creator</h3>
       <h3>Content</h3>
       <h3>Created_at</h3>
       <h3>Likes</h3>

       {blog.map((blog, index) => (
         <>
           <h2>{blog.Title}</h2>
           <h2>{blog.Creator}</h2>
           <h2>{blog.Body}</h2>
           <h2>{blog.Created_at}</h2>
           <h2>{blog.Likes}</h2>
         </>
       ))}
     </div>
    
   </>
 );
}

export default Blog;
