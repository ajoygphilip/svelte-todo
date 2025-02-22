<script lang="ts">
  import '../app.css';
  let { children } = $props();
  import { ModeWatcher } from 'mode-watcher';
  import * as Menubar from '$lib/components/ui/menubar';
  import Sun from 'svelte-radix/Sun.svelte';
  import Moon from 'svelte-radix/Moon.svelte';
  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button/index.js';
</script>

<ModeWatcher />

<div class="flex justify-between items-center rounded-none px-8 mb-8 py-4 border-y-[1px]">
  <div class="flex">
    <p>App Name</p>
  </div>
  <Button variant="ghost" on:click={toggleMode} class="justify-self-end">
    <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</div>

<div class="p-8 m-8 flex justify-center items-center">
  {@render children()}
</div>
