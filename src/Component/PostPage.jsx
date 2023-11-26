import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded, selectedAll } from '../features/posts/postSlice'


const PostPage = () => {
    const posts=useSelector(selectedAll)
    const dispatch=useDispatch();
    console.log(posts)
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const handleTitle=e=>setTitle(e.target.value)
    const handleContent=e=>setContent(e.target.value)
    const handleSubmit=()=>{
        if(title&&content){
            dispatch(
                postAdded(title,content)
            )

        }
       
        setTitle("");
        setContent("");
    }

  return (
    <>
    <form>
        <label htmlFor="title">Title here</label>
        <input 
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitle}
         />
        <label htmlFor="content">Content here</label>
        <input 
            type="text" 
            name="content" 
            id="content"
            value={content}
            onChange={handleContent}
         />
        <button type="button" onClick={handleSubmit}>Save post</button>
    </form>
    <div>
        {posts.map((eachpost)=>
          <article key={eachpost.id}>
          <h3>{eachpost.title}</h3>
          <p>{eachpost.content}</p>
      </article>
        )}
      
    </div>
    </>
  )
}

export default PostPage