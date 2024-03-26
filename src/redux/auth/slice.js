import { createSlice } from "@reduxjs/toolkit";
import {
	signUp,
	logIn,
	logOut,
	refreshUser,
} from "redux/auth/operations";
import { initialState } from "./initialState";
import {
	handleLogInFulfilled,
	handleLogOutFulfilled,
	handlePending,
	handleRefreshUserPending,
	handleRejected,
	handleSignUpFulfilled,
} from "./handlers";

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signUp.fulfilled, handleSignUpFulfilled)
			.addCase(logIn.fulfilled, handleLogInFulfilled)
			.addCase(logOut.fulfilled, handleLogOutFulfilled)
			.addCase(
				refreshUser.pending,
				handleRefreshUserPending,
			)
			.addMatcher(
				action => action.type.endsWith("/pending"),
				handlePending,
			)
			.addMatcher(action =>
				action.type.endsWith("/fulfilled"),
			)
			.addMatcher(
				action => action.type.endsWith("/rejected"),
				handleRejected,
			);
	},
});

export const authReducer = authSlice.reducer;
