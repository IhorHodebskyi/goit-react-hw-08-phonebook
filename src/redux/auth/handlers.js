export const handleFulfilledSignUp = (state, { payload }) => {
	state.user = payload.user;
	state.token = payload.token;
};

export const handleFulfilledLogOut = state => {
	state.user = { name: null, email: null };
	state.token = null;
	state.isLoggedIn = false;
	state.error = null;
	state.isLoading = false;
};

export const handleFulfilledRefreshUser = (state, action) => {
	state.user = action.payload;
	state.isLoggedIn = true;
	state.isRefreshing = false;
	state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
	state.isLoggedIn = true;
	state.error = null;
	state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
	state.error = payload;
	state.isLoading = false;
};

export const handlePending = state => {
	state.isLoading = true;
};
