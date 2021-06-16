export const blogReducer = (state = {blogs : []}, action) =>{
  
  switch (action.type) {
    case "GET_BLOGS_REQUEST":
      return {
        loading: true,
        ...state,
      };

    case "GET_BLOGS_SUCCESS":
      return {
        loading: false,
        blogs: action.payload,
      };
    case "GET_BLOGS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

      default :
      return state
  }
}