import { redirect } from '@sveltejs/kit';
import { query } from '$app/server';

export const goHome = query(async () => {
	redirect(303, '/');
});