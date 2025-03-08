<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import * as Menubar from '$lib/components/ui/menubar';
  import Sun from 'svelte-radix/Sun.svelte';
  import Moon from 'svelte-radix/Moon.svelte';
  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button/index.js';

  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';

  let { data, children } = $props();
  let { session, supabase, user } = $derived(data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

<ModeWatcher />
<div class="min-h-screen flex flex-col justify-between">
  <header class="flex justify-between items-center px-8 py-4 border-y-[1px]">
    <div class="flex">
      <p>App Name</p>
    </div>

    <div class=" flex gap-2 justify-self-end">
      {#if user}
        {user.email}
        <div><a href="signout">sign out</a></div>
      {:else}
        <div><a href="auth">login</a></div>
      {/if}
    </div>

    <Button variant="ghost" on:click={toggleMode} class="justify-self-end">
      <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </header>

  <div class=" p-8 m-8 flex-1 flex flex-col justify-center items-center">
    {@render children()}
  </div>

  <footer class="flex justify-center items-center px-8 p-4 border-y-[1px]">Foooter</footer>
</div>
