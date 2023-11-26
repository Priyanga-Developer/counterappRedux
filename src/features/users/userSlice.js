import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        name:"priya"
    },
    {
        id:2,
        name:"visali"
    },
    {
        id:3,
        name:"sruthi"
    },

]


const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        
    }
})
export const selectedAllUsers=(state)=>state.users;
export default userSlice.reducer