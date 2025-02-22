<script lang="ts">
	import { addToCart } from '$lib/cart';
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
</script>

<svelte:head>
	<title>
		{data.productDetails.name} - bread
	</title>
</svelte:head>

<div class="container my-8">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		{data.productDetails.name}
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-[3fr_1fr] mt-8">
		<div>
			<img
				src={data.productDetails.image_url}
				alt={data.productDetails.name}
				class="w-full object-cover rounded-lg"
			/>
		</div>
		<div class="md:px-6 mt-4 md:mt-0">
			<p class="leading-7 [&:not(:first-child)]:mt-6">{data.productDetails.description}</p>
			{#if data.productDetails.allergens}
				<p class="leading-7 [&:not(:first-child)]:mt-6 font-bold">
					Allergens: {data.productDetails.allergens}
				</p>
			{/if}
			<p class="leading-7 [&:not(:first-child)]:mt-6 font-bold">
				${data.productDetails.price}
			</p>
			<Button
				class="mt-4"
				onclick={() => {
					addToCart(data.productDetails.id);
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
		</div>
	</div>
</div>
