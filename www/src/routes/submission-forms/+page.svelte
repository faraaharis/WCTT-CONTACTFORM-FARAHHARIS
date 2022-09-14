<script>
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;
	$: todos = data.user_submission;
</script>

<div class="main-container">
	<h1>User Submission Form</h1>
	<form
		class="new"
		action="/submission-forms?/add"
		method="post"
		use:enhance={() => {
			return ({ form, result }) => {
				if (result.type === 'success') {
					form.reset();
					invalidateAll();
				}
			};
		}}
	>
		<input name="name" aria-label="Add todo" placeholder="Enter name. E.g Jane Doe" required />
		<input
			type="email"
			name="email"
			aria-label="Add todo"
			placeholder="Enter email address. E.g jane@email.com"
			required
		/>
		<input name="subject" aria-label="Add todo" placeholder="Enter subject.. " />
		<input
			type="text"
			name="description"
			aria-label="Add todo"
			placeholder="Enter description.."
			required
		/>
		<button class="save" aria-label="Submit">
			<label for="submit-button">Submit</label>
		</button>
	</form>
</div>

<style>
	/* input {
		border: 1px solid;
	} */

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
		margin: 0.5em 1em 0.3em 1em;
	}

	.new button {
		font-size: 28px;
		width: 20%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
		margin: 0.5em 1em 0.3em 1em;
	}
</style>
