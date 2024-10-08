import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";
import { RepositoryContext } from "./RepositoryContext";
import { ThemeContext } from "./ThemeContext";

export const useFetch = () => {
  return useContext(ProfileContext);
};

export const useRepository = () => {
  return useContext(RepositoryContext);
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
