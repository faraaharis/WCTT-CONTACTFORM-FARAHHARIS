// @ts-nocheck

import { api } from './api';
import { error, redirect, RequestEvent } from '@sveltejs/kit';
import { loadFlash } from 'sveltekit-flash-message/server';
import { flashMessage } from 'sveltekit-flash-message/server';


/** @type {import('./$types').PageServerLoad} */

/**
 * @typedef {{
 *  id: string;
 *  name: string;
 * }} UserSubmission
 */

// This function is to test api connection only to get all submissions created
export const load = async ({}) => {
	const response = await api('GET', `submissions`);
	if (response.status == 200) {
		return {
			/** @type {UserSubmission[]} */
			user_submission: await response.json()
		};
	}
	throw error(response.status);
};

/** @type {import('./$types').Actions} */
export const actions = {
	add: async ({ request, locals}) => {
    console.log(locals)
		const form = await request.formData();

		let response = await api('POST', `submissions`, {
			name: form.get('name'),
			email: form.get('email'),
			subject: form.get('subject'),
			description: form.get('description')
		});

		if (response.status != 201) {
			// 201 Created
			// TODO: properly display error message to user
			let body = await response.json();
			throw error(response.status, body[0]['message']);
		}
	}
};
