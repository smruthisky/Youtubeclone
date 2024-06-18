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
        closeMenu:(state)=>{
            state.isMenuOpen= false;
        }
    },

});
//we need to export the actions as well
export const {togglemenu,closeMenu} =appSlice.actions
export default appSlice.reducer;
