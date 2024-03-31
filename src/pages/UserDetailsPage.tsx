import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../services/GithubServices";
import { IUser } from "../models/UserModel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const UserDetailsPageStyled = styled(Box)`
  margin-top: 3rem;
`;

const UserDetailsPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        if (!userId) return;

        setLoading(true);
        const userDetails = await fetchUserDetails(userId);
        setUser(userDetails);
      } catch (error) {
        console.error(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUserDetails();
  }, [userId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!user) {
    return <Typography variant="h6">User not found</Typography>;
  }

  return (
    <UserDetailsPageStyled>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={user.avatar_url}
          alt={user.login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.login}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Name: {user.name || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {user?.location || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {user?.company || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Followers: {user.followers}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Following: {user.following}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Public Repositories: {user.public_repos}
          </Typography>
        </CardContent>
      </Card>
    </UserDetailsPageStyled>
  );
};

export default UserDetailsPage;
