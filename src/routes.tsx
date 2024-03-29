import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import ErrorPage from "./pages/ErrorPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/users" element={<UserListPage />} />
    <Route path="/users/:userId" element={<UserDetailsPage />} />
    <Route path="*" element={<ErrorPage message="Page not found." />} />
  </Routes>
);

export default AppRoutes;
