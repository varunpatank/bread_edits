<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import { pages } from './pages';
</script>

<div class="w-full bg-primary py-8">
	<div class="container text-primary-foreground flex flex-col gap-4">
		<div class="grid place-items-center">
			<a href="/" class="w-fit text-center"><Logo /></a>
		</div>
		<div class="flex flex-row gap-4 justify-center">
			{#each pages as page}
				<a href={page.href} class="text-center font-medium underline underline-offset-4">
					{page.title}
				</a>
			{/each}
		</div>
		<div class="text-center">
			<a
				href="https://maps.app.goo.gl/azSbbyC12TmuJwfF8"
				class="text-center font-medium underline underline-offset-4"
				target="_blank"
			>
				1600 Pennsylvania Avenue NW, Washington, DC 20500
			</a>
		</div>
	</div>
</div>
