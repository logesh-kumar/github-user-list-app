import React from "react";
import ReactDOM from "react-dom/client";
import CssbaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.tsx";

import theme from "./utils/theme.ts";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssbaseLine />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
