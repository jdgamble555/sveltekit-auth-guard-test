import { error } from '@sveltejs/kit';
import { query } from '$app/server';

export const setGuard = query(async () => {
	error(401, 'Unauthorized');
});