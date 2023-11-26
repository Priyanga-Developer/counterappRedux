import React from 'react'
import { useDispatch } from 'react-redux'
import {reactionsAdded} from '../features/posts/postSlice'


const reactions={
    thumbsUp:'👍',
    wow:'😮',
    heart:'💖',
    rocket:'🚀',
    coffee:'☕'
}
const ReactionButtons = ({post}) => {
    const dispatch=useDispatch();
    const reactionButtons=Object.entries(reactions).map(([name,emoji])=>{
        return (
        <button 
            key={name}
            type="button"
            className='reactionButton'
            onClick={()=>{
                dispatch(reactionsAdded({
                    postId:post.id,
                    reaction:name

                }))
            }}
        >
         {emoji} {post.reactions[name]}
        </button>
        )
    })

  return (
    <>{reactionButtons}</>
  )
}

export default ReactionButtons