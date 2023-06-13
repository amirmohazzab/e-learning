import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers:{
        addUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { addUser, clearUser } = userSlice.actions
export default userSlice.reducer