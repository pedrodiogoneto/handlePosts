import * as constants from '../../constants';
import { Post } from '../../constants/types';

// Action interfaces
export interface Loading {
	type: constants.LOADING;
	payload: {
		loading: boolean;
	};
}

export interface LoadingError {
	type: constants.LOADING_ERROR;
	payload: {
		loading: boolean;
		error: string;
	};
}

export interface LoadingSuccess {
	type: constants.LOADING_SUCCESS;
	payload: {
		loading: boolean;
	};
}

export interface ListPosts {
	type: constants.LIST_POSTS;
	payload: {
		loading: boolean;
	};
}

export interface ListPostsSuccess {
	type: constants.LIST_POSTS_SUCCESS;
	payload: {
		loading: boolean;
	};
	posts: Post[];
}

export interface AddPost {
	type: constants.ADD_POST;
	payload: {
		loading: boolean;
	};
}

export interface AddPostSuccess {
	type: constants.ADD_POST_SUCCESS;
	payload: {
		loading: boolean;
	};
	posts: Post[];
}

export interface DeletePost {
	type: constants.DELETE_POST;
	payload: {
		loading: boolean;
	};
}

export interface DeletePostSuccess {
	type: constants.DELETE_POST_SUCCESS;
	payload: {
		loading: boolean;
	};
	posts: Post[];
}

export type LoadingType = Loading | LoadingError | LoadingSuccess;
export type Posts = ListPosts | ListPostsSuccess | AddPost | AddPostSuccess | DeletePost | DeletePostSuccess;
