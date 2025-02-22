<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { cart } from '$lib/cart';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	onMount(() => {
		$cart = [];
	});
</script>

<div class="container my-8">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">thank you!</h1>
	<p class="leading-7 [&:not(:first-child)]:mt-6">
		Thank you for your purchase! A receipt has been sent to your email at {data.email}. If you
		actually paid for something on this site, first off, why, and also, we'll refund you shortly
		because you aren't getting anything.
	</p>
	<p class="leading-7 [&:not(:first-child)]:mt-6">
		Please note that we cannot refund the Stripe transaction fee, which is roughly $0.50.
	</p>
</div>
