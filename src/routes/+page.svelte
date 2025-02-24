<script lang="ts">
  import type { Todo } from '$lib/types';

  const todos: Todo[] = $state([
    { title: 'Buy milk... or a cow? 🤔', completed: true },
    { title: 'Learn how to say no... starting tomorrow.', completed: false },
    { title: 'Water the plants before they become cacti. 🌵', completed: false },
    { title: "Google 'How to be productive'... later.", completed: false },
    { title: 'Remind myself to stop forgetting things.', completed: false },
    { title: "Take a nap and call it 'self-care'. 😴", completed: false },
    { title: 'Convince my cat that I’m in charge. 🐱', completed: false },
    { title: 'Actually read the terms & conditions. (Just kidding.)', completed: false },
    { title: "Put 'wake up' on the list so I can cross something off.", completed: false }
  ]);

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

  <div class="flex-1 overflow-auto p-2 max-h-[60vh]">
    {#each todos as todo, i (i)}
      <div class="listitem">{todo}</div>
    {/each}
  </div>

  <form onsubmit={addTodos} class="w-full mt-16">
    <input type="text" class="w-full p-4" placeholder="Add a todo..." />
  </form>
</div>
