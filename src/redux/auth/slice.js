import { createSlice } from "@reduxjs/toolkit";
import {
	signUp,
	logIn,
	logOut,
	refreshUser,
} from "redux/auth/operations";
import { initialState } from "./initialState";

const handlePending = state => {
	state.isLoading = false;
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signUp.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
			})
			.addCase(logIn.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
			})
			.addCase(logOut.fulfilled, state => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(
				refreshUser.fulfilled,
				(state, { payload }) => {
					state.user = payload;
					state.isLoggedIn = true;
					state.isRefreshing = false;
					state.isLoading = false;
				},
			)
			.addCase(
				refreshUser.rejected,
				(state, { payload }) => {
					state.isRefreshing = false;
					state.error = payload;
					state.isLoading = false;
				},
			)
			.addMatcher(
				action => action.type.endsWith("/pending"),
				handlePending,
			);
	},
});

export const authReducer = authSlice.reducer;
