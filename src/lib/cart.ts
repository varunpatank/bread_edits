import { persisted } from 'svelte-persisted-store';
import { get } from 'svelte/store';

export interface CartItem {
	id: number;
	quantity: number;
}

export const cart = persisted<CartItem[]>('cart', []);

export const addToCart = (id: number): void => {
	const item = get(cart).find((item) => item.id === id);
	if (item) {
		cart.update((cart) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			cart.find((item) => item.id === id)!.quantity += 1;
			return cart;
		});
	} else {
		cart.update((cart) => {
			cart.push({ id, quantity: 1 });
			return cart;
		});
	}
};

/** Removes a single item of `id` from the cart */
export const removeFromCart = (id: number): void => {
	const item = get(cart).find((item) => item.id === id);
	if (item) {
		cart.update((cart) => {
			const index = cart.findIndex((item) => item.id === id);
			cart[index].quantity -= 1;
			if (cart[index].quantity <= 0) {
				cart.splice(index, 1);
			}
			return cart;
		});
	}
};
