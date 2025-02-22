import { stripe } from '$lib/server/stripe';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const POST = (async ({ request, url }) => {
	const items = (await request.json()) as { price_id: string; quantity: number }[];

	const paymentIntent = await stripe.checkout.sessions
		.create({
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			ui_mode: 'custom' as any,
			mode: 'payment',
			return_url: `${url.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
			line_items: items.map((item) => ({
				price: item.price_id,
				quantity: item.quantity,
			})),
			allow_promotion_codes: true,
		})
		.catch((_error: unknown) => {
			throw error(400, _error as App.Error);
		});

	return json({
		client_secret: paymentIntent.client_secret,
	});
}) satisfies RequestHandler;
