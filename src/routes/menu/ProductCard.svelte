<script lang="ts">
	import { addToCart } from '$lib/cart';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	interface Props {
		product: PageData['products'][number];
		cartMode?: boolean;
	}

	let { product, cartMode = false }: Props = $props();
</script>

<Card.Root>
	<Card.Header>
		<a href="/menu/{product.slug}">
			<Card.Title>{product.name}</Card.Title>
		</a>
		<Card.Description>
			${product.price}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<a href="/menu/{product.slug}">
			<img
				src={product.image_url}
				alt={product.name}
				class={[cartMode && 'max-w-screen-sm w-56 h-auto']}
			/>
		</a>
	</Card.Content>
	<Card.Footer class="gap-4">
		<Button
			onclick={() => {
				addToCart(product.id);
				toast.success('Added to cart!', {
					action: {
						label: 'View Cart',
						onClick: () => {
							goto('/cart');
						},
					},
				});
			}}
		>
			add to cart
		</Button>
		{#if !cartMode}
			<Button variant="outline" href="/menu/{product.slug}">view details</Button>
		{/if}
	</Card.Footer>
</Card.Root>
