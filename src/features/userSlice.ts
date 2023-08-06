import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { IUserState } from '../utils/types';

const initialState: IUserState | any = {
    user: {},
  };
  
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = {};
        },
    },
});

export const { addUser, clearUser } = userSlice.actions
export default userSlice.reducer