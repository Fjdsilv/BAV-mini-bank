import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
};

export const getExchange = createAsyncThunk('account/getExchange', (getCurrency) => {
    return fetch(getCurrency)
            .then((resp) => resp.json())
            .then((data) => data.rates.USD) 
            .catch((err) => console.log(err));
});

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        deposit: (state, action) => {
            console.log(action);
            state.balance = state.balance + Number(action.payload);
        },
        withdraw: (state, action) => {
            if (state.balance <= 0) return;
            state.balance = state.balance - Number(action.payload);
        },
        requestLoan: (state, action) => {
            if (state.loan > 0) return;
            state.loan = Number(action.payload.loanAmount);
            state.balance = state.balance + Number(action.payload.loanAmount);
            state.loanPurpose = action.payload.loanPurpose;
        },
        payLoan: (state, { payload }) => {
            if (Number(payload) === state.loan) {
                state.balance = state.balance - Number(payload);
                state.loan = 0;
                state.loanPurpose = "";
            }
            else {
                state.balance = state.balance - Number(payload);
                state.loan = state.loan - Number(payload);
            }
        },
    },
    extraReducers: (builder) => {   
        builder
            .addCase(getExchange.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getExchange.fulfilled, (state, action) => {
                console.log(action);
                state.balance = state.balance + Number(action.payload);
                state.isLoading = false;
            })
            .addCase(getExchange.rejected, (state, action) => {
                state.isLoading = false;
            })
    },
});

export const { 
    deposit,
    withdraw,
    requestLoan,
    payLoan,
 } = accountSlice.actions;

export default accountSlice.reducer;


/*

const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
  .then(resp => resp.json())
  .then((data) => {
    alert(`10 GBP = ${data.rates.USD} USD`);
  });


*/