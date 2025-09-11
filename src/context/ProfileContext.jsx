/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./index.js";
export const ProfileProvider = ({ children }) => {
  const userInLocalStorage = localStorage.getItem("user");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = userInLocalStorage ? userInLocalStorage : null;
  const [errors, setErrors] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const apiAccessToken = import.meta.env.VITE_API_TOKEN;
  console.log(apiAccessToken)

  const fetchUserData = async () => {
    try {
      setErrors("");

      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: { Authorization: `token ${apiAccessToken}` },
      });

      if (!response.ok) {
        setErrors("User not found");
        throw new Error("User not found in api request");
      }

      const data = await response.json();
      setProfile(data);
      localStorage.setItem("profile", JSON.stringify(data));
      navigate(`/profile/${username}`);
      setUsername("");
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <ProfileContext.Provider
      value={{
        profile,
        errors,
        setErrors,
        loading,
        user,
        setLoading,
        username,
        setUsername,
        fetchUserData,
        handleLogout,
        setProfile,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};
