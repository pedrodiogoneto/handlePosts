export const LOADING = () => {
	return {
		payload: {
			loading: true,
		},
		type: "LOADING",
	};
};

export const LOADING_ERROR = (error: string) => {
	return {
		payload: {
			error,
			loading: false,
		},
		type: "LOADING_ERROR",
	};
};

export const LOADING_SUCCESS = () => {
	return {
		payload: {
			loading: false,
		},
		type: "LOADING_SUCCESS",
	};
};