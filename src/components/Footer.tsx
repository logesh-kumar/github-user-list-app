import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer: React.FC = () => (
  <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
    <Container maxWidth="lg">
      <Typography variant="body1" align="center" color="text.secondary">
        © Your Company {new Date().getFullYear()}
      </Typography>
    </Container>
  </Box>
);

export default Footer;
