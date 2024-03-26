import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/selectors";

export const selectContactsIsLoading = state =>
	state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		return (
			contacts.length > 0 &&
			contacts.filter(contact =>
				contact.name
					.toLowerCase()
					.includes(filter.toLowerCase()),
			)
		);
	},
);
