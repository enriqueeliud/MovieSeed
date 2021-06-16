import axios from "axios"

export const getAllBlogs = () => async dispatch=>{
 dispatch({type:"GET_BLOGS_REQUEST"})

 try {
  const response = await axios.get('/api/blogs/getallblogs')
  console.log(response)
   dispatch({type:"GET_BLOGS_SUCCESS", payload : response.data})
 } catch (error) {
  dispatch({type:"GET_BLOGS_FAILED", payload:error})
 }
}