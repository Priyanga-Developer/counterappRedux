import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        title:"My first Post",
        content:"Enjoy every moment of your life"
    },
    {
        id:2,
        title:"Happy Morning",
        content:"Be positive always"
    }
]

export const postSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{

    }
})
export const selectAllPosts=((state)=>state.posts)

export default postSlice.reducer