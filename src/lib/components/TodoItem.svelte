<script lang="ts">
  import type { Todo } from '$lib/types';

  interface Props {
    todo: Todo;
  }

  let { todo }: Props = $props();
</script>

<div class="listitem flex items-center">
  <p class:line-through={todo.completed}>{todo.title}</p>
  <input class="ml-auto" type="checkbox" checked={todo.completed} />
</div>
