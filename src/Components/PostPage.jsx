import React from 'react'
import {useSelector} from "react-redux"
import { selectAllPosts } from '../features/posts/postSlice'

const PostPage = () => {
  const posts =useSelector(selectAllPosts)
  console.log(posts)
  return (
    <>
    <h3>Add posts here</h3>
    <form>
      <label htmlFor='title'></label>
          <input 
          type='text' 
          placeholder='Enter the title here'
          />
      <label htmlFor='content'></label>
      <input 
          type='text' 
          placeholder='Enter the Content here'
          />
          <button type='submit'>Save Post</button>
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