export interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  location?: string;
  company?: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface IUserSummary {
  id: string;
  login: string;
  avatar_url: string;
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
