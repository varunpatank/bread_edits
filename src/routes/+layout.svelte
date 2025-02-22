<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import { invalidate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';
	import Confirm from '$lib/Confirm.svelte';

	interface Props {
		children: Snippet;
		data: PageData;
	}

	let { children, data }: Props = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Navbar />

{@render children()}

<Footer />

<Confirm />
<Toaster theme="light" />
