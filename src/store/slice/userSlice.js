import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUser, removeUser, createUsers } from "../reducers/userReducer";


const initialState = {
    users: [],
    isLoading: false,
    isError: "",
};

const UsersSlices = createSlice({
    initialState,
    name: "users",
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUser.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
            state.users = [];
        })
        builder.addCase(fetchAllUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users = action.payload;
        })
        builder.addCase(fetchAllUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users = [];
        })

        builder.addCase(createUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
        })
        builder.addCase(createUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users.push(action.payload);
        })
        builder.addCase(createUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })
        builder.addCase(removeUser.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
        })
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users = state.users.filter((user) => user.id !== action.payload);
        })
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })
    }
})

const userReducer = UsersSlices.reducer;
export default userReducer;