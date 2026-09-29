<script lang="ts">
  import { setGuard } from "../guard.remote";

  await setGuard();
</script>

<h1 class="mb-4 text-4xl font-semibold sm:text-5xl">Secret</h1>
<p class="text-xl leading-8 text-neutral-600">
  This is a secret page. You should not be able to access it. Refresh to see
  proper error message.
</p>
