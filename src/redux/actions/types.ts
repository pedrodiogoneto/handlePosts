import * as constants from '../../constants';
import { Post } from '../../constants/types'

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

export type LoadingType = Loading | LoadingError | LoadingSuccess;
export type Posts = ListPosts | ListPostsSuccess;
