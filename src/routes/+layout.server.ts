import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { safeGetSession }, cookies }) => {
	const { session } = await safeGetSession();
	return {
		session,
		cookies: cookies.getAll(),
	};
}) satisfies LayoutServerLoad;
