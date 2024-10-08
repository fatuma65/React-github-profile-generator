/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const userInLocalStorage = localStorage.getItem("user");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = userInLocalStorage ? userInLocalStorage : null;

  const navigate = useNavigate();
  const apiAccessToken = import.meta.env.VITE_API_TOKEN;
  const fetchUserData = async () => {
    setLoading(true);

    try {
      if (!user) {
        console.log("User not found");
        return;
      }
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${user}`, {
        headers: { Authorization: `token ${apiAccessToken}` },
      });

      if (!response.ok) {
        throw new Error("User not found in api request");
      }
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      fetchUserData();
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <ProfileContext.Provider value={{ profile, loading, user, setLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};
