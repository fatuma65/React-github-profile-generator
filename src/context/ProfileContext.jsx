/* eslint-disable react/prop-types */
import { createContext} from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const userInLocalStorage = localStorage.getItem("user");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    userInLocalStorage ? userInLocalStorage : ""
  );

  const navigate = useNavigate();
  const apiAccessToken = import.meta.env.VITE_API_TOKEN;
  const fetchUserData = async () => {
    if (!user) console.log("User not found");
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        headers: {'Authorization': `token ${apiAccessToken}`}
      });
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
      JSON.stringify(localStorage.setItem("user", user));
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      fetchUserData();
      navigate("/profile");
    }
  };
  return (
    <ProfileContext.Provider
      value={{ profile, loading, handleSubmit, user, setUser, setLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

