import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, refreshUser } from "redux/auth/operations";
import { initialState } from "./initialState";
// import {
// 	handleFulfilled,
// 	handleFulfilledLogIn,
// 	handleFulfilledLogOut,
// 	handleFulfilledRefreshUser,
// 	handleFulfilledSignUp,
// 	handlePending,
// 	handleRejected,
// } from "./handlers";

const handlePending = state => {
	state.isLoading = true;
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signUp.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
			})
			.addCase(logOut.fulfilled, state => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
				state.isLoading = false;
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
				state.isLoading = false;
			})
			.addCase(refreshUser.rejected, (state, { payload }) => {
				state.isRefreshing = false;
				state.error = payload;
				state.isLoading = false;
			})
			.addMatcher(
				action => action.type.endsWith("/pending"),
				handlePending,
			);
	},
});

export const authReducer = authSlice.reducer;
