<script lang="ts">
	import { page } from '$app/state';
</script>

<section aria-labelledby="error-title">
	<h1 id="error-title" class="mb-4 text-4xl font-semibold sm:text-5xl">Error</h1>
	<p class="text-xl leading-8 text-neutral-600">{page.error?.message ?? 'An unexpected error occurred'}</p>
	<a class="mt-6 inline-block text-xl text-neutral-800 underline" href="/">Return home</a>
</section>