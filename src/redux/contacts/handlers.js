export const handleFulfilledContacts = (
	state,
	{ payload },
) => {
	state.items = payload;
};

export const handleFulfilledAddContact = (
	state,
	{ payload },
) => {
	state.items.unshift(payload);
};

export const handleFulfilledDelete = (
	state,
	{ payload },
) => {
	state.items = state.items.filter(
		item => item._id !== payload._id,
	);
};

export const handleFulfilledUpdateContact = (
	state,
	{ payload },
) => {
	state.items = state.items.map(item => {
		if (item._id === payload._id) {
			return {
				...item,
				name: payload.name,
				number: payload.number,
			};
		}
		return item;
	});
};

export const handleFulfilled = state => {
	state.isLoading = false;
	state.error = null;
};

export const handlePending = state => {
	state.isLoading = true;
};

export const handleRejected = (state, { error }) => {
	state.isLoading = false;
	state.error = error.message;
};
