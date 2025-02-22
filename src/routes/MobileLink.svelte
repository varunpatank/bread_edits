<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		open = $bindable(false),
		href,
		class: className,
		children,
		...restProps
	}: HTMLAnchorAttributes & { open: boolean } = $props();

	const handleClick = (): void => {
		open = false;
	};
</script>

<a
	{href}
	class={cn(page.url.pathname === href ? 'text-foreground' : 'text-foreground/60', className)}
	onclick={handleClick}
	{...restProps}
>
	{@render children?.()}
</a>
