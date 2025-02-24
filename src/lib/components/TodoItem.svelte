<script lang="ts">
  import type { Todo } from '$lib/types';

  interface Props {
    todo: Todo;
  }

  let { todo }: Props = $props();
</script>

<div class="listitem">
  <p class:line-through={todo.completed}>{todo.title}</p>
</div>
