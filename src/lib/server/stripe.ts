import { STRIPE_SECRET } from '$env/static/private';
import { Stripe } from 'stripe';

export const stripe = new Stripe(STRIPE_SECRET, {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	apiVersion: '2024-12-18.acacia; custom_checkout_beta=v1' as any,
});
