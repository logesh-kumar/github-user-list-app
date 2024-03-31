import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetails, fetchUserRepos } from "../services/GithubServices";
import { IUser, IRepository } from "../models/UserModel"; // Assuming IRepository is added to your model
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Grid,
} from "@mui/material";

const UserDetailsPageStyled = styled(Box)`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const UserDetailsPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<IRepository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserDetailsAndRepos = async () => {
      try {
        if (!userId) return;

        setLoading(true);
        const userDetails = await fetchUserDetails(userId);
        setUser(userDetails);

        const userRepos = await fetchUserRepos(userId); // Assuming this method exists and fetches user repos
        setRepos(userRepos);
      } catch (error) {
        console.error(error);
        setUser(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    getUserDetailsAndRepos();
  }, [userId]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return <Typography variant="h6">User not found</Typography>;
  }

  return (
    <UserDetailsPageStyled>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: "24rem" }}>
            <CardMedia
              component="img"
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
                Public repositories: {user.public_repos}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxHeight: 600, overflow: "auto" }}>
            <Typography gutterBottom variant="h5" component="div">
              Repositories
            </Typography>
            {repos.map((repo) => (
              <Typography
                key={repo.name}
                variant="body2"
                color="text.secondary"
              >
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {repo.name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </UserDetailsPageStyled>
  );
};

export default UserDetailsPage;
