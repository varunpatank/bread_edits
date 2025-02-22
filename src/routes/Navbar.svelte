<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils.js';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import MainNav from './MainNav.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { cart } from '$lib/cart';
	import MobileNav from './MobileNav.svelte';

	let cartSize = $derived($cart.reduce((accumulator, item) => accumulator + item.quantity, 0));
</script>

<header
	class="border-border/40 bg-primary supports-[backdrop-filter]:bg-primary sticky top-0 z-50 w-full border-b text-primary-foreground"
>
	<div class="container flex h-16 max-w-screen-2xl items-center">
		<MainNav />
		<MobileNav />
		<div class="grow"></div>
		<div class="flex items-center justify-between space-x-2 md:justify-end">
			<nav class="flex items-center">
				<a href="/cart" class="relative">
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost',
							}),
							'size-10 p-0',
						)}
					>
						<ShoppingCart class="size-6 fill-current" />
						<span class="sr-only">Cart</span>
					</div>
					{#if cartSize > 0}
						<Badge
							variant="destructive"
							class="aspect-square size-4 absolute -bottom-1 -right-1 p-1"
						>
							{cartSize}
						</Badge>
					{/if}
				</a>
			</nav>
		</div>
	</div>
</header>
