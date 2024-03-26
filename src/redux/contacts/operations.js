import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from "notiflix";
import { errorMessage } from "serves/error";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get("/api/contacts");
			return data;
		} catch (error) {
			const { status } = error.response;
			Notify.info(errorMessage(status));
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const addContacts = createAsyncThunk(
	"contacts/addContacts",
	async ({ name, number }, thunkAPI) => {
		try {
			const { data } = await axios.post("/api/contacts", {
				name,
				number,
			});
			return data;
		} catch (error) {
			const { status } = error.response;
			Notify.info(errorMessage(status));
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const deleteContacts = createAsyncThunk(
	"contacts/deleteContacts",
	async (contactId, thunkAPI) => {
		try {
			const { data } = await axios.delete(
				`/api/contacts/${contactId}`,
			);
			return data;
		} catch (error) {
			const { status } = error.response;
			Notify.info(errorMessage(status));
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const updateContact = createAsyncThunk(
	"contacts/putContact",
	async ({ contactId, name, number }, thunkAPI) => {
		try {
			const { data } = await axios.put(
				`/api/contacts/${contactId}`,
				{
					name,
					number,
				},
			);
			return data;
		} catch (error) {
			const { status } = error.response;
			Notify.info(errorMessage(status));
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
