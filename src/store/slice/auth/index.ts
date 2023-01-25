import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../common/types/auth";

const initialState:any={
    user:{
        id:null,
        firstName:'',
        username:'',
        email:'',
        pin:'',
        telegram:'',
        createdAt:'',
        updatedAt:'',
        watchlist:[
            {
                id:null,
                name:'',
                assetId:'',
                createdAt:'',
                updatedAt:'',
                user:null
            }
        ]
    },
    isLogged:false
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action){
            state.user=action.payload
            state.isLogged=true

        }
    }
})

export const {login}=authSlice.actions
export default authSlice.reducer