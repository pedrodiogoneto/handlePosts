import { Post, PostData } from '../../constants/types';

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

export const LIST_POSTS_SUCCESS = (posts: Post[]) => {
	return {
		payload: {
			loading: false,
		},
		posts,
		type: 'LIST_POSTS',
	};
};

export const ADD_POST = (data: PostData) => {
	return {
		payload: {
			data,
			loading: true,
		},
		type: 'ADD_POST',
	};
};

export const ADD_POST_SUCCESS = (posts: Post[]) => {
	return {
		payload: {
			loading: false,
		},
		posts,
		type: 'ADD_POST_SUCCESS',
	};
};

export const DELETE_POST = (id: string) => {
	return {
		payload: {
			id,
			loading: true,
		},
		type: 'DELETE_POST',
	};
};

export const DELETE_POST_SUCCESS = (posts: Post[]) => {
	return {
		payload: {
			loading: false,
		},
		posts,
		type: 'DELETE_POST_SUCCESS',
	};
};

export const UPDATE_POST = (id: string) => {
	return {
		payload: {
			id,
			loading: true,
		},
		type: 'UPDATE_POST',
	};
};

export const UPDATE_POST_SUCCESS = (posts: Post[]) => {
	return {
		payload: {
			loading: false,
		},
		posts,
		type: 'UPDATE_POST_SUCCESS',
	};
};
