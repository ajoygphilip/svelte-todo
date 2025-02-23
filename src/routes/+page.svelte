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

<div class="flex flex-col p-2 w-full flex-1 self-start">
  <h2 class="m-4 text-xl">Inbox</h2>
  <div>
    {#each todos as todo, i (i)}
      <div class="listitem">{todo}</div>
    {/each}
    <form onsubmit={addTodos} class="mt-4 justify-end w-full">
      <input type="text" class="w-full px" placeholder="Add a todo..." />
    </form>
  </div>
</div>
