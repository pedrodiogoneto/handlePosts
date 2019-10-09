const API_BASE_ADDRESS = 'https://wf-challenge-d6haqugtoo.herokuapp.com/api/v1/posts';

export default class Api {
	static listPosts(): Promise<Response> | undefined {
		const uri = `${API_BASE_ADDRESS}/`;

		return fetch(uri, {
			method: 'GET',
		});
	}
}
