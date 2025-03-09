<script lang="ts">
  import type { Todo } from '$lib/types';
  import { enhance } from '$app/forms';
  import { fly, slide } from 'svelte/transition';

  interface Props {
    todo: Todo;
    updateSaving: any;
  }

  let { todo, updateSaving }: Props = $props();
  let form: HTMLFormElement;
</script>

<div in:fly={{ y: 20 }} out:slide class="listitem flex items-center">
  <p class:line-through={todo.completed}>{todo.title}</p>
  <form
    method="POST"
    class="ml-auto"
    action="?/updateCompleted"
    bind:this={form}
    use:enhance={() => {
      updateSaving(true);
      return async ({ update }) => {
        await update();
        updateSaving(false);
      };
    }}
  >
    <input type="hidden" name="todoId" value={todo.id} />
    <input class="ml-auto" name="completed" type="checkbox" checked={todo.completed} onchange={() => form.requestSubmit()} />
  </form>
</div>
