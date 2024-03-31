export interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  repos_url: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  location?: string;
  company?: string;
}

export interface IUserSummary {
  id: string;
  login: string;
  avatar_url: string;
}

export interface IRepository {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

export interface UserCardProps {
  user: IUserSummary;
}

export interface UserDetailProps {
  user: IUser;
}

export interface ErrorPageProps {
  message: string;
}
