import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@mui/material";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container component="main" maxWidth="lg">
        <AppRoutes />
      </Container>
    </Router>
  );
};
export default App;
