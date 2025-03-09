<script lang="ts">
  import TodoItem from '$lib/components/TodoItem.svelte';
  import { enhance } from '$app/forms';
  import type { SubmitFunction } from '@sveltejs/kit';
  import type { PageProps } from './$types';

  let hideCompleted = $state(true);
  let { data }: PageProps = $props();

  let form: HTMLFormElement;
  let saving = $state(false);

  const optimisticEnhance: SubmitFunction = async ({ action, cancel }) => {
    saving = true;
    return async ({ update }) => {
      await update();
      saving = false;
    };
  };
</script>

<div class="flex flex-col h-full p-2 w-full flex-1">
  <div class="flex p-4 flex-row items-center">
    <h2 class=" text-xl self-start">Inbox</h2>
    {#if saving}
      <h2 class="ml-auto">Saving...</h2>
    {/if}
    <div class="ml-auto text-sm justify-self-end">
      <label for=""
        >Show Completed
        <input type="checkbox" bind:checked={hideCompleted} />
      </label>
    </div>
  </div>

  <div class="flex-1 overflow-auto p-2 max-h-[50vh]">
    {#each data.todos?.filter(a => !a.completed || hideCompleted) as todo, i (i)}
      <TodoItem
        {todo}
        updateSaving={(value: boolean) => {
          saving = value;
        }}
      />
    {/each}
  </div>

  <form action="?/addTodo" method="POST" bind:this={form} use:enhance={optimisticEnhance} class="w-full mt-16">
    <input disabled={saving} type="text" name="todo" class="w-full p-4" required placeholder="Add a todo..." />
  </form>
</div>
