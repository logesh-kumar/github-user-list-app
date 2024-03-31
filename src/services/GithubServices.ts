import axios from "axios";
import { IRepository, IUser, IUserSummary } from "../models/UserModel";
import { BASE_URL } from "../utils/constants";

export const fetchUsers = async (): Promise<IUserSummary[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.map((user: any) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const fetchUserDetails = async (userId: string): Promise<IUser> => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    const user = response.data;
    return {
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      name: user.name,
      location: user.location,
      company: user.company,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      repos_url: user.repos_url,
    };
  } catch (error) {
    throw new Error(`Failed to fetch details for user ${userId}`);
  }
};

export const fetchUserRepos = async (
  userId: string
): Promise<IRepository[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/repos`);
    return response.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      forks_count: repo.forks_count,
      language: repo.language,
      html_url: repo.html_url,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch repositories for user ${userId}`);
  }
};
