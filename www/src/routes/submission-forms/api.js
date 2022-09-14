/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

const base = 'http://localhost:8080';
// const base = 'https://api.svelte.dev';
// const base = 'https://stagingresource.heyjom.com';
// const base = 'http://127.0.0.1:8001';

/**
 * @param {string} method
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 */
export function api(method, resource, data) {
	console.log(`URL is ${base}/${resource}`);

	console.log('Calling api from database');

	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json',
			// 'content-length': '100',
			'accept': 'application/json',
			// 'transfer-encoding':'chunked',

		},
		body: data && JSON.stringify(data)
	});

	// return result;
}
