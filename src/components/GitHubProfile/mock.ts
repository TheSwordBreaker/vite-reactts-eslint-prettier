import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.github.com/users/nickFalcone/followers', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          login: 'mardix',
          id: 111839,
          node_id: 'MDQ6VXNlcjExMTgzOQ==',
          avatar_url: 'https://avatars.githubusercontent.com/u/111839?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mardix',
          html_url: 'https://github.com/mardix',
          followers_url: 'https://api.github.com/users/mardix/followers',
          following_url: 'https://api.github.com/users/mardix/following{/other_user}',
          gists_url: 'https://api.github.com/users/mardix/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/mardix/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/mardix/subscriptions',
          organizations_url: 'https://api.github.com/users/mardix/orgs',
          repos_url: 'https://api.github.com/users/mardix/repos',
          events_url: 'https://api.github.com/users/mardix/events{/privacy}',
          received_events_url: 'https://api.github.com/users/mardix/received_events',
          type: 'User',
          site_admin: false,
        },
        {
          login: 'anyweez',
          id: 313409,
          node_id: 'MDQ6VXNlcjMxMzQwOQ==',
          avatar_url: 'https://avatars.githubusercontent.com/u/313409?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/anyweez',
          html_url: 'https://github.com/anyweez',
          followers_url: 'https://api.github.com/users/anyweez/followers',
          following_url: 'https://api.github.com/users/anyweez/following{/other_user}',
          gists_url: 'https://api.github.com/users/anyweez/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/anyweez/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/anyweez/subscriptions',
          organizations_url: 'https://api.github.com/users/anyweez/orgs',
          repos_url: 'https://api.github.com/users/anyweez/repos',
          events_url: 'https://api.github.com/users/anyweez/events{/privacy}',
          received_events_url: 'https://api.github.com/users/anyweez/received_events',
          type: 'User',
          site_admin: false,
        },
      ]),
    );
  }),
];
