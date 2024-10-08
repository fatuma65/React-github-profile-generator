/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const userInLocalStorage = localStorage.getItem("user");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = userInLocalStorage ? JSON.parse(userInLocalStorage) : null
  // const [user, setUser] = useState(
  //   userInLocalStorage || ""
  // );

  const navigate = useNavigate();
  const apiAccessToken = import.meta.env.VITE_API_TOKEN;
  const fetchUserData = async () => {
    // if (!user) {
      
    //   return <h1>User is not available</h1>
    // };
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
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      localStorage.setItem("user", user);
      fetchUserData();
      navigate("/profile");
    }
  };
  return (
    <ProfileContext.Provider
      value={{ profile, loading, handleSubmit, user,setLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};
