<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import BreadCarousel from './BreadCarousel.svelte';
	import Offerings from './Offerings.svelte';
	import WhyBread from './WhyBread.svelte';
</script>

<div class="container my-8">
	<h1 class="w-full text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		bread
	</h1>
	<p class="leading-7 [&:not(:first-child)]:mt-6 text-center mb-6">
		the world's premier vegetarian bread restaurant
	</p>

	<div class="w-full flex justify-center mb-6">
		<Button size="lg" class="text-lg" href="/menu">order online</Button>
	</div>

	<BreadCarousel />
	<WhyBread />
</div>
<Offerings />
