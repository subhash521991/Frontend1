import React, { useEffect, useState } from 'react'



const BlogList = () => {
const [display, setDisplay] = useState(false);
const [show, setShow] = useState();

const[blogs, setBlogs]= useState([]);

const showBlog = ()=>{

setDisplay(true);
console.warn(blogs.data); 

}

useEffect(()=>{

  const getBlogs = async () => {

    let result = await fetch('http://localhost:8000/blogs');
    result = await result.json();
    setBlogs(result);
    //alert(JSON.stringify(result.data));

   
}

getBlogs();



},[]);



  return (
    <div>
    <button onClick={showBlog}>Get Blogs</button>
      <h2>Blog List</h2>
   {
  blogs.data && blogs.data.map((item,index)=>
    <ul key={index}>
    <li>{item.title}</li>
    <li>{item.body}</li>
    </ul>
    
    )

   }
      
    </div>
  )
}

export default BlogList
