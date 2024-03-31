// Adjusted pages/UserListPage.tsx to use UserCard
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/GithubServices";
import { IUserSummary } from "../models/UserModel";
import { CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

const UserListPageCardView: React.FC = () => {
  const [users, setUsers] = useState<IUserSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Link to={`/users/${user.login}`} style={{ textDecoration: "none" }}>
            <UserCard user={user} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserListPageCardView;
