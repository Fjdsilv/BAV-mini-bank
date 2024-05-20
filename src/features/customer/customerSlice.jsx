import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    accountID: "",
    accountEmail: "",
    accountPassword: "",
    createdAt: "",
};

const customerSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        createCustomer: (state, { payload }) => {
            const { 
                fullName, 
                accountID, 
                accountEmail, 
                accountPassword, 
                createdAt, 
            } = payload;

            state.fullName = fullName;
            state.accountID = accountID;
            state.accountEmail = accountEmail;
            state.accountPassword = accountPassword;
            state.createdAt = createdAt;
        },
        updateName: (state, action) => {
            state.fullName = action.payload;
        },
        deleteAccount: (state) => {
            state.fullName = "";
            state.accountID = "";
            state.createdAt = "";
        },
    },
});

export const {
    createCustomer,
    updateName,
} = customerSlice.actions;

export default customerSlice.reducer;