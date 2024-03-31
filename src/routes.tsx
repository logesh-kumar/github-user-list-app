import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserListPageListView from "./pages/UserListPageListView";
import UserListPageCardView from "./pages/UserListPageCardView";
import UserDetailsPage from "./pages/UserDetailsPage";
import ErrorPage from "./pages/ErrorPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/users/list-view" element={<UserListPageListView />} />
    <Route path="/users/card-view" element={<UserListPageCardView />} />
    <Route path="/users/:userId" element={<UserDetailsPage />} />
    <Route path="*" element={<ErrorPage message="Page not found." />} />
  </Routes>
);

export default AppRoutes;
