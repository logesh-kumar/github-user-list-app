import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">GitHub User Explorer</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
