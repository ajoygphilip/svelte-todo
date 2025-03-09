import type { Actions } from '@sveltejs/kit';
import type { Todo } from '$lib/types.js';
import { USER } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  let { data, error } = await locals.supabase.from('todo').select('*').order('created_at');

  let todos: Todo[] = [];
  if (!error) todos = data as Todo[];

  return {
    todos
  };
};

export const actions: Actions = {
  addTodo: async ({ request, locals, url }) => {
    console.log('adding todo from action');
    const formData = await request.formData();
    let user = locals.user;

    // throw Error('new error');
    const { data, error } = await locals.supabase
      .from('todo')
      .insert([{ title: formData.get('todo'), user_id: user?.id }])
      .select();

    if (error) {
      return { error };
    }
  }
};
