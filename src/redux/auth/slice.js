import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, refreshUser } from "redux/auth/operations";
import { initialState } from "./initialState";
import {
	handleFulfilled,
	handleFulfilledLogOut,
	handleFulfilledRefreshUser,
	handleFulfilledSignUp,
	handlePending,
	handleRejected,
} from "./handlers";

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(signUp.fulfilled, handleFulfilledSignUp)
			.addCase(logIn.fulfilled, handleFulfilledSignUp)
			.addCase(logOut.fulfilled, handleFulfilledLogOut)
			.addCase(refreshUser.fulfilled, handleFulfilledRefreshUser)
			.addMatcher(
				({ type }) => type.endsWith("fulfilled"),
				handleFulfilled,
			)
			.addMatcher(({ type }) => type.endsWith("rejected"), handleRejected)
			.addMatcher(({ type }) => type.endsWith("pending"), handlePending),
});

export const authReducer = authSlice.reducer;
