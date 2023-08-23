export const handleFulfilledSignUp = (state, { payload }) => {
	state.user = payload.user;
	state.token = payload.token;
};

export const handleFulfilledLogIn = (state, { payload }) => {
	state.user = payload.user;
	state.token = payload.token;
};

export const handleFulfilledLogOut = state => {
	state.user = { name: null, email: null };
	state.token = null;
	state.error = null;
	state.isLoading = false;
};

export const handleFulfilledRefreshUser = (state, { payload }) => {
	state.user = payload;
	state.isRefreshing = false;
	state.error = null;
};

export const handlePending = state => {
	state.isLoading = true;
};

export const handleFulfilled = state => {
	state.isLoggedIn = true;
	state.error = null;
	state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
	state.error = payload;
	state.isLoading = false;
	state.isRefreshing = false;
};
