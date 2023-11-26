import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        title:"first post",
        content:"All is well"
    },
    {
        id:2,
        title:"Happy Morning",
        content:"life is beautiful"
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
      prepare(title,content) {
        return{
            payload:{
                id:nanoid(),
                title,
                content
            }
        }

       }
       
    }
       
    }

})
export const {postAdded}=postSlice.actions
export const selectedAll =(state)=>state.posts
export default postSlice.reducer