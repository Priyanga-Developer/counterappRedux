import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";
const initialState=[
    {
        id:1,
        title:"first post",
        content:"All is well",
        date:sub(new Date(),{minutes:10}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    {
        id:2,
        title:"Happy Morning",
        content:"life is beautiful",
        date:sub(new Date(),{minutes:5}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    }

]

const postSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{
       postAdded:{
      reducer(state,action){
          state.push(action.payload)
       },
      prepare(title,content,userId) {
        return{
            payload:{
                id:nanoid(),
                title,
                content,
                date:new Date().toISOString(),
                userId,
                reactions:{
                    thumbsUp:0,
                    wow:0,
                    heart:0,
                    rocket:0,
                    coffee:0
                }
            }
        }

       }
       
    },
    reactionsAdded(state,action){
       const {postId,reaction}=action.payload
       const existingPost=state.find((post)=>post.id===postId)
       if(existingPost){
        existingPost.reactions[reaction]++
       }
    }
       
    }

})
export const {postAdded ,reactionsAdded}=postSlice.actions
export const selectedAll =(state)=>state.posts
export default postSlice.reducer