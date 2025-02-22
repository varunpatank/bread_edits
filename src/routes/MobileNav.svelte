<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { cn } from '$lib/utils.js';
	import MobileLink from './MobileLink.svelte';
	import { pages } from './pages.js';

	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger
		class={cn(
			buttonVariants({
				variant: 'ghost',
				class: 'mr-2 px-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden',
			}),
		)}
	>
		<svg
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="size-5"
		>
			<path
				d="M3 5H11"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M3 12H16"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M3 19H21"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
		<span class="sr-only">Toggle Menu</span>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
			<div class="flex flex-col space-y-3">
				{#each pages as navItem, index (`${navItem.title}${index}`)}
					<MobileLink href={navItem.href} bind:open class="text-foreground">
						{navItem.title}
					</MobileLink>
				{/each}
			</div>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>

<a href="/" class="md:hidden">
	<Logo class="size-10 gap-2 flex-row ml-4" iconClass="size-10" />
</a>
