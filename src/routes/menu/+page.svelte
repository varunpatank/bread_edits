<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import ProductCard from './ProductCard.svelte';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>menu - bread</title>
</svelte:head>

<div class="container my-8">
	<h1 class="scroll-m-20 mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">menu</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<Card.Root>
			<Card.Header>
				<a href="/create">
					<Card.Title>Create a Sandwich</Card.Title>
				</a>
				<Card.Description>Variable price</Card.Description>
			</Card.Header>
			<Card.Content>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="/create">
					<enhanced:img src="./sandwich.jpg" alt="A sandwich" />
				</a>
			</Card.Content>
			<Card.Footer class="gap-4">
				<Button href="/create">start</Button>
			</Card.Footer>
		</Card.Root>

		{#each data.products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
