<script lang="ts">
  import type { Todo } from '$lib/types';
  import TodoItem from '$lib/components/TodoItem.svelte';

  let hideCompleted = $state(true);

  function addTodos(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    let title = input?.value;
    todos.push({ title, completed: false });
    input.value = '';
  }
</script>

<div class="flex flex-col h-full p-2 w-full flex-1">
  <h2 class="m-4 text-xl self-start">Inbox</h2>
  <input type="checkbox" bind:checked={hideCompleted} />

  <div class="flex-1 overflow-auto p-2 max-h-[50vh]">
    {#each $todos.filter(a => !a.completed || hideCompleted) as todo, i (i)}
      <TodoItem {todo} />
    {/each}
  </div>

  <form onsubmit={addTodos} class="w-full mt-16">
    <input type="text" class="w-full p-4" placeholder="Add a todo..." />
  </form>
</div>
