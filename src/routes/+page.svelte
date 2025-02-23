<script lang="ts">
  let todos: string[] = $state(['I want to ', 'Build', 'something cool']);

  function addTodos(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    let todo = input?.value;
    todos.push(todo);
    todos = todos;
    input.value = '';
  }
</script>

<div class="flex flex-col h-full p-2 w-full flex-1">
  <h2 class="m-4 text-xl self-start">Inbox</h2>

  <div class="flex-1 overflow-auto p-2">
    {#each todos as todo, i (i)}
      <div class="listitem">{todo}</div>
    {/each}
  </div>

  <form onsubmit={addTodos} class="w-full">
    <input type="text" class="w-full p-4" placeholder="Add a todo..." />
  </form>
</div>
