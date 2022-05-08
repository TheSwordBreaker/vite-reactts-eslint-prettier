import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useGetGitHubProfile } from './useGetGitHubProfile';

export type Follower = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

const GitHubProfile = ({ user }: { user: string }): JSX.Element => {
  const { isLoading, isError, error, data } = useGetGitHubProfile(user);

  return (
    <>
      <p>{user}&apos;s followers:</p>
      {isLoading && <p>Loading...</p>}
      {isError && error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((follower: Follower) => {
            return (
              <li key={follower.id}>
                <a href={follower.html_url}>{follower.login}</a>
              </li>
            );
          })}
        </ul>
      )}
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};

export default GitHubProfile;
