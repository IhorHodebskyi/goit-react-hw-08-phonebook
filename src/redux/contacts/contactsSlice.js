import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	fetchContacts,
	addContacts,
	deleteContacts,
} from "redux/contacts/operations";
import {
	handleFulfilled,
	handleFulfilledAddContact,
	handleFulfilledContacts,
	handleFulfilledDelete,
	handlePending,
	handleRejected,
} from "./handlers";

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.fulfilled, handleFulfilledContacts)
			.addCase(addContacts.fulfilled, handleFulfilledAddContact)
			.addCase(deleteContacts.fulfilled, handleFulfilledDelete)
			.addMatcher(
				action => action.type.endsWith("/fulfilled"),
				handleFulfilled,
			)
			.addMatcher(
				action => action.type.endsWith("/pending"),
				handlePending,
			)
			.addMatcher(
				action => action.type.endsWith("/rejected"),
				handleRejected,
			),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
