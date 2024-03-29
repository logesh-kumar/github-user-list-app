import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to GitHub User Explorer
      </Typography>
      <Typography variant="h5" paragraph>
        Discover GitHub users and their detailed profiles.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/users")}
        >
          Explore Users
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
