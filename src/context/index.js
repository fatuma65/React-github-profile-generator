import { useContext, createContext } from "react";

import { RepositoryContext } from "./RepositoryContext";
import { ThemeContext } from "./ThemeContext";
export const ProfileContext = createContext();
export const useFetch = () => {
  return useContext(ProfileContext);
};

export const useRepository = () => {
  return useContext(RepositoryContext);
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
