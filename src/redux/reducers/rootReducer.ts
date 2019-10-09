import { LOADING, LOADING_ERROR, LOADING_SUCCESS } from '../../constants/index';
import { LoadingType } from '../actions/types';
import { StoreState } from '../store/types';

const initialState = { Loading: false };

export default function reduxSagaReducer(state: StoreState = initialState, action: LoadingType) {
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
	default: {
		return state;
	}
	}
}
