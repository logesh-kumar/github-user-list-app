import axios from "axios";
import { IUser, IUserSummary } from "../models/UserModel";
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
    };
  } catch (error) {
    throw new Error(`Failed to fetch details for user ${userId}`);
  }
};
