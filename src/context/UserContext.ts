import { IUser, IUserSummary } from "../models/UserModel";

export interface UserContextType {
  users: IUserSummary[];
  selectedUser: IUser;
  fetchUsers: () => Promise<void>;
  fetchUserDetails: (userId: string) => Promise<void>;
}
