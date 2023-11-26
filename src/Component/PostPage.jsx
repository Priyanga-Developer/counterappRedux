import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded, selectedAll } from '../features/posts/postSlice'
import { selectedAllUsers } from '../features/users/userSlice'
import Author from './Author'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'


const PostPage = () => {
    const posts=useSelector(selectedAll)
    const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const users=useSelector(selectedAllUsers);
    const dispatch=useDispatch();

    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [userId,setUserId]=useState("");
    const handleTitle=e=>setTitle(e.target.value)
    const handleContent=e=>setContent(e.target.value)
    const handleAuthor=e=>setUserId(e.target.value)

    const handleSubmit=()=>{
        if(title&&content){
            dispatch(
                postAdded(title,content,userId)
            )

        }
       
        setTitle("");
        setContent("");
    }
    const savepost =Boolean(title)&&Boolean(content)&&Boolean(userId)

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
         <label htmlFor="author">Author</label>
         <select name="author" id="author" value={userId} onChange={handleAuthor}>
            <option value=""></option>
            { users.map((eachUser)=>
                <option key={eachUser.id}  value={eachUser.id}>{eachUser.name}</option>
            )
        
            }
         </select>
        <button type="button" 
        onClick={handleSubmit}
        disabled={!savepost}
        >Save post</button>
    </form>
    <div>
        {orderedPosts.map((eachpost)=>
          <article key={eachpost.id}>
          <h3>{eachpost.title}</h3>
          <p>{eachpost.content}</p>
          <p className='postCredit'>
            <Author userId={eachpost.userId}/>
            <TimeAgo timeStamp={eachpost.date}/>
            <ReactionButtons post={eachpost}/>
          </p>
      </article>
        )}
      
    </div>
    </>
  )
} 

export default PostPage