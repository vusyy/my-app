import { createSlice } from "@reduxjs/toolkit";
const movies = createSlice({
    name: "movies",
    initialState: {
        value: []
    },
    reducers: {
        addTOList(state,action){
            // state.value.push(action.payload)
            console.log(action.payload)
        },
        removeFromList(state){
            state.splice(0,1)
        }
    }
})
export const {addTOList,removeFromList} = movies.actions
export default movies.reducer