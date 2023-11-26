import React from 'react'
import { useSelector } from 'react-redux'
import { selectedAllUsers } from '../features/users/userSlice'

const Author = ({userId}) => {
    const users=useSelector(selectedAllUsers);
    const author=users.find(user=>user.id===Number((userId)))
   
  return (
    <span>by {author?author.name:"unknown author"}</span>
  )
}

export default Author