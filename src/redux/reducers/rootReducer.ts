import { LOADING, LOADING_ERROR, LOADING_SUCCESS } from '../../constants/index';
import { LoadingType, Posts } from '../actions/types';
import { StoreState } from '../store/types';

const initialState = { Loading: false, posts: [] };

type actionType = LoadingType | Posts;

export default function reduxSagaReducer(state: StoreState = initialState, action: actionType) {
	switch (action.type) {
	case 'LOADING': {
		return {
			...state,
			Loading: true,
		};
	}
	case 'LOADING_SUCCESS': {
		return {
			...state,
			Loading: false,
		}
	}
	case 'LOADING_ERROR': {
		return {
			...state,
			Loading: false,
			error: action.payload.error,
		};
	}
	case 'LIST_POSTS': {
		return {
			...state,
			Loading: false,
		};
	}
	case 'LIST_POSTS_SUCCESS': {
		return {
			...state,
			Loading: false,
			posts: action.posts,
		};
	}
	case 'ADD_POST': {
		console.log(action);
		return {
			...state,
			Loading: false,
		};
	}
	case 'ADD_POST_SUCCESS': {
		return {
			...state,
			Loading: false,
			posts: action.posts,
		};
	}
	default: {
		return state;
	}
	}
}
