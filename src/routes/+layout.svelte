<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="mx-auto w-[calc(100%-2rem)] max-w-5xl py-12">
	{@render children()}
<nav class="mt-12 flex gap-8 border-t border-neutral-300 pt-5 text-lg" aria-label="Main navigation">
	<a class="text-neutral-800 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-800" href="/">Home</a>
	<a class="text-neutral-800 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-800" href="/secret">Secret</a>
	<a class="text-neutral-800 no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-800" href="/change">Change</a>
</nav>
</main>
