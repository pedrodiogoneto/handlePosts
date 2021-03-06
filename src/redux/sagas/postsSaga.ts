import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../../services/apiService';

async function fetchAsync(func: any, data: any) {
	const response = await func(data);
	if (response.status === 200) return response.data;
	throw new Error('Unexpected error!!!');
}

async function postAsync(func: any, data: any) {
	const response = await func(data);
	if (response.status === 201) return fetchAsync(Api.listPosts, '');
	throw new Error('Unexpected error!!!');
}

async function deleteAsync(func: any, id: number) {
	const response = await func(id);
	if (response.status === 204) return fetchAsync(Api.listPosts, '');
	throw new Error('Unexpected error!!!');
}

async function updateAsync(func: any, data: any) {
	const response = await func(data);
	if (response.status === 200) return fetchAsync(Api.listPosts, '');
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

function* addPost(data: any) {
	try {
		yield put({type: 'LOADING' });
		const posts = yield postAsync(Api.addPost, data.payload.data);
		yield put({type: 'ADD_POST_SUCCESS', posts});
	} catch (e) {
		console.log('erro', e);
		yield put({type: 'LOADING_ERROR', error: e});
	}
}

function* deletePost(data: any) {
	try {
		yield put({type: 'LOADING' });
		const posts = yield deleteAsync(Api.deletePost, data.payload.id);
		yield put({type: 'DELETE_POST_SUCCESS', posts});
	} catch (e) {
		console.log('erro', e);
		yield put({type: 'LOADING_ERROR', error: e});
	}
}

function* updatePost(data: any) {
	try {
		yield put({type: 'LOADING' });
		const posts = yield updateAsync(Api.updatePost, data.payload.data);
		yield put({type: 'UPDATE_POST_SUCCESS', posts});
	} catch (e) {
		console.log('erro', e);
		yield put({type: 'LOADING_ERROR', error: e});
	}
}

export function* postsSaga(data?: any) {
	yield takeLatest('LIST_POSTS', fetchPosts);
	yield takeLatest('ADD_POST', addPost);
	yield takeLatest('DELETE_POST', deletePost);
	yield takeLatest('UPDATE_POST', updatePost);
}

export default postsSaga;
