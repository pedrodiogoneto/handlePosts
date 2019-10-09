export const LOADING = () => {
	return {
		payload: {
			loading: true,
		},
		type: 'LOADING',
	};
};

export const LOADING_ERROR = (error: string) => {
	return {
		payload: {
			error,
			loading: false,
		},
		type: 'LOADING_ERROR',
	};
};

export const LOADING_SUCCESS = () => {
	return {
		payload: {
			loading: false,
		},
		type: 'LOADING_SUCCESS',
	};
};

export const LIST_POSTS = () => {
	return {
		payload: {
			loading: true,
		},
		type: 'LIST_POSTS',
	};
};

export const LIST_POSTS_SUCCESS = (posts: any) => {
	return {
		payload: {
			loading: false,
		},
		posts,
		type: 'LIST_POSTS',
	};
};
