import * as constants from "../../constants";

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

export type LoadingType = Loading | LoadingError | LoadingSuccess;
