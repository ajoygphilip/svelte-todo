import type { Todo } from '$lib/types';

const getInitialTodos = (): Todo[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export const todos = $state(getInitialTodos());
