import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Typography variant="h6">GitHub user explorer</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
