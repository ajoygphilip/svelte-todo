<script lang="ts">
  import { enhance } from '$app/forms';

  const props = $props();
</script>

<form class="socials" method="POST" use:enhance>
  <!-- <button formaction="?/signup&provider=github" class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"> Github </button>
  <button formaction="?/signup&provider=discord" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
    Discord
  </button> -->
  <button formaction="?/signin&provider=google" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"> Google </button>
</form>
