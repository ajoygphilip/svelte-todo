<script lang="ts">
  import { todos } from '$lib/state.svelte';
  import TodoItem from '$lib/components/TodoItem.svelte';

  let hideCompleted = $state(true);

  function addTodos(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const id = crypto.randomUUID();
    let title = input?.value;
    todos.push({ id, title, completed: false });
    input.value = '';
  }

  $effect(() => {
    if (typeof window !== 'undefined') {
      console.log('from store');
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  });
</script>

<div class="flex flex-col h-full p-2 w-full flex-1">
  <div class="flex p-4 flex-row items-center">
    <h2 class=" text-xl self-start">Inbox</h2>
    <div class="ml-auto text-sm justify-self-end">
      <label for=""
        >Show Completed
        <input type="checkbox" bind:checked={hideCompleted} />
      </label>
    </div>
  </div>

  <div class="flex-1 overflow-auto p-2 max-h-[50vh]">
    {#each todos.filter(a => !a.completed || hideCompleted) as todo, i (i)}
      <TodoItem {todo} />
    {/each}
  </div>

  <form onsubmit={addTodos} class="w-full mt-16">
    <input type="text" class="w-full p-4" placeholder="Add a todo..." />
  </form>
</div>
