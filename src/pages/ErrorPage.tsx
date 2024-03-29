import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  message = "Something went wrong.",
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        {message}
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
