import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../../services/apiService';

async function fetchAsync(func: any, data: any) {
	const response = await func(data);
	if (response.status === 200) return await response.json();
	throw new Error('Unexpected error!!!');
}

function* fetchPosts() {
	try {
		yield put({type: 'LOADING' });
		const posts = yield fetchAsync(Api.listPosts, '');
		yield put({type: 'LIST_POSTS_SUCCESS', posts});
	} catch (e) {
		console.log('erro', e);
		yield put({type: 'LOADING_ERROR', error: e});
	}
}

export function* postsSaga() {
	yield takeLatest('LIST_POSTS', fetchPosts);
}

export default postsSaga;
