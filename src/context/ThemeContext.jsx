/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeInLocalStorage = localStorage.getItem("github_theme");
  const [theme, setTheme] = useState(
    themeInLocalStorage ? themeInLocalStorage : "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("gitHub_theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

