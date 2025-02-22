import { error, redirect } from '@sveltejs/kit';
import type Stripe from 'stripe';
import type { PageServerLoad } from './$types';

export const load = (async ({ url, fetch }) => {
	const sessionId = url.searchParams.get('session_id');
	if (!sessionId) {
		throw error(400, 'Missing session_id');
	}
	const session = (await (await fetch(`/session-status?session_id=${sessionId}`)).json()) as {
		status: Stripe.Checkout.Session.Status;
		customer_email: string | undefined;
	};

	if (session.status === 'open' || session.status === 'expired') {
		throw redirect(302, '/checkout');
	} else {
		return {
			email: session.customer_email,
		};
	}
}) satisfies PageServerLoad;
