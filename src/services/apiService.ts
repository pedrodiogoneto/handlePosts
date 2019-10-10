import axios from 'axios';
const API_BASE_ADDRESS = 'https://wf-challenge-d6haqugtoo.herokuapp.com/api/v1/posts';

export default class Api {
	static listPosts(): Promise<Response> | undefined {
		const uri = `${API_BASE_ADDRESS}/`;

		return axios.get(uri);
	}

	static addPost(data: any): Promise<Response> | undefined {
		const uri = `${API_BASE_ADDRESS}/`;

		return axios.post(uri, data);
	}

	static deletePost(id: number): Promise<Response> | undefined {
		const uri = `${API_BASE_ADDRESS}/${id}`;

		return axios.delete(uri);
	}

	static updatePost(id: any): Promise<Response> | undefined {
		const uri = `${API_BASE_ADDRESS}/${id}`;

		return axios.delete(uri);
	}
}
