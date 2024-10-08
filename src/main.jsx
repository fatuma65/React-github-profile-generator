import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProfileProvider } from "./context/ProfileContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { RepositoryProvider } from "./context/RepositoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <ThemeProvider>
          <RepositoryProvider>
            <App />
          </RepositoryProvider>
        </ThemeProvider>
      </ProfileProvider>
    </BrowserRouter>
  </StrictMode>
);
