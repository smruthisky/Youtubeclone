import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true
    },
    reducers:{
        //we give actions that has to be done here.Basically the funcs
        togglemenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
    },

});
//we need to export the actions as well
export const {togglemenu} =appSlice.actions
export default appSlice.reducer;
