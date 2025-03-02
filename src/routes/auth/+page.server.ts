import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError, type Provider } from '@supabase/supabase-js';

import type { Actions } from './$types';

const OAUTH_PROVIDERS = ['google', 'discord', 'github'];

export const actions: Actions = {
  signin: async ({ request, locals, url }) => {
    const supabase = locals.supabase;
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const provider = url.searchParams.get('provider') as Provider;

    if (provider) {
      if (!OAUTH_PROVIDERS.includes(provider)) {
        return fail(400, {
          error: 'Provider not supported.'
        });
      }
      const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
        provider: provider
      });

      if (err) {
        console.log(err);
        return fail(400, {
          message: 'Something went wrong.'
        });
      }

      throw redirect(303, data.url);
    }
  }
};
