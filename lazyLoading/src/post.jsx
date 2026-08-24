import React, { useEffect, useState } from 'react'
 const Post = () => {
    const [posts,setPost]=useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data= await response.json()
            setPost(data)
        }
        fetchData()
    },[])
  return (
    <div>
        <h2>Post</h2>
        <ul>
             {posts.map((post) => (
               <li key={post.id}>
               <h3>{post.title}</h3>
               <p>{post.body}</p>
          </li>
        ))}
        </ul>
    </div> 
  )
}
export default Post