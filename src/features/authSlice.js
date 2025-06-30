import { createSlice } from "@reduxjs/toolkit";


//here track weaather a user is auth or not 
// if usr is auth then show other components


const initialState = {
    status:false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers:{
        login: (state , action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state)=>{
            state.status = false,
            state.userData = null
        }
    }

})

export const {login , logout}  = authSlice.actions
export default authSlice.reducer

// export authSlice  reduces for store
// export actions so that components can get acess 